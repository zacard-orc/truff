pragma solidity ^0.5.16;

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
    uint256 ticket = 0.05 ether;
    uint storedData;
    uint amount;
    address payable public owner = address(0x0);

    mapping (address => uint256) internal _balances;
    mapping (address => mapping (address => uint256)) internal _allowed;


    constructor() public payable {
        owner = msg.sender;
    }

    // 可被支付的合约，当被支付时调用
    function() external payable {
        amount += msg.value;
//        require(msg.value >= ticket);
//        if (msg.value > ticket) {
//            uint refundFee = msg.value - ticket;
//            msg.sender.transfer(refundFee);
//        }
    }

    function withdraw() public {
//        msg.sender.transfer(amount);
        owner.transfer(amount);
        amount = 0;
    }

    function set(uint x) public {
        storedData = x;
        amount += x;
    }

    function get() public view returns (uint) {
        return storedData;
    }

    function getAmt() public view returns (uint,address) {
        return (amount, owner);
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
        storedData += 20;
        balances[receiver] += amount;
    }

    function send(address receiver, uint amount) public {
        if (balances[msg.sender] < amount) return;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Sent(msg.sender, receiver, amount);
    }
}


pragma solidity >=0.4.16;

contract Token{
    uint256 public totalSupply;
    string public name;
    uint8 public decimals;
    string public symbol;

    function balanceOf(address _owner) public view returns (uint256 balance);
    function transfer(address _to, uint256 _value) public returns (bool success);
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success);
    function approve(address _spender, uint256 _value) public returns (bool success);
    function allowance(address _owner, address _spender) public view returns (uint256 remaining);

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}

contract TokenERC20 is Token {

    constructor(uint256 _initialAmount, string memory _tokenName, uint8 _decimalUnits, string memory _tokenSymbol) public {
        totalSupply = _initialAmount * 10 ** uint256(_decimalUnits);
        balances[msg.sender] = totalSupply;

        name = _tokenName;
        decimals = _decimalUnits;
        symbol = _tokenSymbol;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balances[msg.sender] >= _value && balances[_to] + _value > balances[_to]);
        require(_to != address(0));
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);

        return true;
    }


    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(balances[_from] >= _value && allowed[_from][msg.sender] >= _value);
        balances[_to] += _value;
        balances[_from] -= _value;
        allowed[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);

        return true;
    }

    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balances[_owner];
    }


    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {
        return allowed[_owner][_spender];
    }

    mapping (address => uint256) balances;
    mapping (address => mapping (address => uint256)) allowed;
}
