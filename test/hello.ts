import '@nomiclabs/hardhat-ethers';
import {ethers}from 'hardhat';
import { expect } from 'chai';

describe ("hello ", function(){
    it("should say", async function() {

        //setup, deploy constract, call f
        const HelloWorld = await ethers.getContractFactory("HelloWorld"); 
        const hello = await HelloWorld.deploy();
        await hello.deployed();

        expect(await hello.hello()).to.equal("Hello, World");
    })
})