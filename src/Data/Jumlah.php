<?php
namespace DrianTcho\Data;

class Jumlah{
    public function __construct(private string $firstNumber)
    {
        
    }

    public function JumlahKan($secondNumber){
        return $secondNumber + $this->firstNumber;
    }
}