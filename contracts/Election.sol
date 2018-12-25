pragma solidity ^0.4.23;
contract election {
    // the structure
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    // event
    event votedEvent(uint indexed_candidateId);
    // store the structure
    mapping(uint => Candidate) public candidates;
    // judge if voted
    mapping(address => bool) public voters;
    // total number
    uint public candidateCount;
    // constructor function
    constructor() public {
        addCandidate("张青龙");
        addCandidate("李白虎");
    }
    // add candidate
    function addCandidate(string _name) private {
        candidateCount++;
        candidates[candidateCount] = Candidate(candidateCount, _name, 0);
    }
    // voting
    function vote(uint _candidateId) public {
        // filtering
        require(!voters[msg.sender]);
        require(_candidateId > 0 && _candidateId <= candidateCount);
        // mark that client has voted
        voters[msg.sender] = true;
        candidates[_candidateId].voteCount++;
        emit votedEvent(_candidateId);
    }
}