pragma solidity 0.5.16;

contract Test {

    function () external payable {}

    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }

    function get_balance() public view returns (uint){
        return address(this).balance;
    }

    function sayHi() public pure returns (string memory){
        return "Hi, linly";
    }

    function sayHi2() public pure returns (string memory){
        return "Hi, linly2";
    }

    function fba() public pure returns (string memory){
        return "Hi, fba";
    }

    function addFunc(uint a, uint b) pure public returns (uint){
        return a + b;
    }

//    function sendDemo(address payable add) public {
//        uint u = 1 ether;
//        add.transfer(u);
//    }
}

