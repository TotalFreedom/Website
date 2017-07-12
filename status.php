<?php
/**
* Minecraft Server Status Query
*
* Adapted by StevenLawson for TotalFreedom Website
*
* @link        https://github.com/FunnyItsElmo/PHP-Minecraft-Server-Status-Query/
* @author      Julian Spravil <julian.spr@t-online.de>
* @copyright   Copyright (c) 2016 Julian Spravil
* @license     https://github.com/FunnyItsElmo/PHP-Minecraft-Server-Status-Query/blob/master/LICENSE
*/

class Packet
{
    protected $packetID;
    protected $data;

    public function __construct($packetID)
    {
        $this->packetID = $packetID;
        $this->data = pack('C', $packetID);
    }

    public function addSignedChar($data)
    {
        $this->data .= pack('c', $data);
    }

    public function addUnsignedChar($data)
    {
        $this->data .= pack('C', $data);
    }

    public function addSignedShort($data)
    {
        $this->data .= pack('s', $data);
    }

    public function addUnsignedShort($data)
    {
        $this->data .= pack('S', $data);
    }

    public function addString($data)
    {
        $this->data .= pack('C', strlen($data));
        $this->data .= $data;
    }

    public function send($socket)
    {
        $this->data = pack('C', strlen($this->data)) . $this->data;
        socket_send($socket, $this->data, strlen($this->data), 0);
    }
}

class HandshakePacket extends Packet
{
    public function __construct($host, $port, $protocol, $nextState)
    {
        parent::__construct(0);
        $this->addUnsignedChar($protocol);
        $this->addString($host);
        $this->addUnsignedShort($port);
        $this->addUnsignedChar($nextState);
    }
}

class PingPacket extends Packet
{
    public function __construct()
    {
        parent::__construct(0);
    }
}

class MinecraftServerStatus
{
    public static function query($host, $port = 25565)
    {
        $socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
        if (!@socket_connect($socket, $host, $port))
        {
            return false;
        }

        $handshakePacket = new HandshakePacket($host, $port, 107, 1);
        $pingPacket = new PingPacket();

        $handshakePacket->send($socket);

        $start = microtime(true);
        $pingPacket->send($socket);
        $length = self::readVarInt($socket);
        $ping = round((microtime(true) - $start) * 1000);

        $data = socket_read($socket, $length, PHP_NORMAL_READ);
        $data = strstr($data, '{');
        $data = json_decode($data, true);

        $data['ping'] = $ping;

        return $data;
    }

    private static function readVarInt($socket)
    {
        $a = 0;
        $b = 0;
        while (true)
        {
            $c = socket_read($socket, 1);
            if (!$c)
            {
                return 0;
            }
            $c = Ord($c);
            $a |= ($c & 0x7F) << $b ++ * 7;
            if ($b > 5)
            {
                return false;
            }
            if (($c & 0x80) != 128)
            {
                break;
            }
        }
        return $a;
    }
}

$response = MinecraftServerStatus::query('192.99.69.234', 25565);

header("Cache-Control: no-cache, must-revalidate");
header("Expires: Thu, 01 Jan 1970 00:00:01 GMT");
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

if (!$response)
{
    $response = array('status' => false);
}
else
{
    $response['status'] = true;
}

echo json_encode($response, JSON_PRETTY_PRINT);
