<?php
namespace DrianTcho\Data;

class People{
    public function __construct(private string $name)
    {
        
    }

    public function sayHello(string $name){
        echo "Hallo $name, my name is $this->name";
    }
}