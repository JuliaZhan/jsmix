const SHA256=require("crypto-js/sha256");//引用sha256加密库
class Block
{
    constructor(index,timestamp,data,previousHash=''){
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.previousHash=previousHash;
        this.hash=this.calcuHash();
    }
    calcuHash(){
        return SHA256(this.index+this.timestamp+JSON.stringify(this.data).toString()+this.previousHash);
    }
}

class BlockChain{
    constructor(){
        this.chain=[this.createFirstBlock()];
    }
    createFirstBlock(){
        return new Block(0,"01/01/2018","First Block","0");
    }
    getNextBlock(){
        return this.chain[this.chain.length-1];
    }
    addBlock(newBlock){
        newBlock.previousHash=this.getNextBlock().hash;
        newBlock.hash=newBlock.calcuHash();
        this.chain.push(newBlock);
    }
    isChainValid(){
        for(let i=1;i<this.chain.length;i++)
        {
            const currentBlock=this.chain[i]
        }
    }
}