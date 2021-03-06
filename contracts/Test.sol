pragma solidity 0.5.16;

//contract Test {
//
//    function () external payable {}
//
//    uint storedData;
//
//    function set(uint x) public {
//        storedData = x;
//    }
//
//    function get() public view returns (uint) {
//        return storedData;
//    }
//
//    function get_balance() public view returns (uint){
//        return address(this).balance;
//    }
//
//    function sayHi() public pure returns (string memory){
//        return "Hi, linly";
//    }
//
//    function addFunc(uint a, uint b) pure public returns (uint){
//        return a + b;
//    }
//
//    function sendDemo(address payable add) public {
//        uint u = 1 ether;
//        add.transfer(u);
//    }
//}


contract Test {

    function () external payable {}

    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}


contract Coin {
    // 关键字“public”让这些变量可以从外部读取
    address public minter;
    uint public storedData;
    mapping(address => uint) public balances;

    // 轻客户端可以通过事件针对变化作出高效的反应
    event Sent(address from, address to, uint amount);

    // 这是构造函数，只有当合约创建时运行
    constructor () public {
        minter = msg.sender;
    }

    function setD(uint x) public {
        storedData = x;
    }

    function getD() public view returns (uint) {
        return storedData;
    }

    function getMinter() public view returns (address){
        return minter;
    }

//    function getBalance() public view returns (mapping(address => uint) memory){
//        return balances;
//    }

    function mint(address receiver, uint amount) public {
        if (msg.sender != minter) return;
        storedData+=20;
        balances[receiver] += amount;
    }

    function send(address receiver, uint amount) public {
        if (balances[msg.sender] < amount) return;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Sent(msg.sender, receiver, amount);
    }
}
