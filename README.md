# Friendtract

Friendtract is an early first-stage prototype of a Dapp to enable smart contracts between friends. In this version, a smart contract is created between two friends who share a group in the GroupMe mobile app. The contract charges one of the friends if he spams the group (i.e. if he sends more than a set threshold number of messages per minute to the group).

This application is built using the Embark framework (https://github.com/hitchcott/meteor-embark) with Meteor. It is run using a local node on the Ethereum testrpc network. In this first attempt, real ether is not sent and the smart contracts are not called. This version is instead an effort to understand how the Embark framework works, and the feasibility of a more robust application.

# Usage

Upon launching the application, the user is present with the option to create a new contract.

![Alt text](./public/images/home_page.png?raw=true "home_page")

After selecting this option, they must fill out the requisite fields. The access token is obtained by creating a developer account on GroupMe (https://dev.groupme.com/) to access the GroupMe API. The GroupId can also be found on the GroupMe site, and references the specific group a user wants the application to monitor for spam. The next input field is the GroupMe username of the friend to watch for spam, and the contract creator specifies what number of messages per minute qualifies as spam. The amount of ether to charge for spamming is specified, as well as the public key of the Ethereum account that will receive funds if there is spam. The account to fund the smart contract is the public key of the Ethereum contract that will send funds to the contract to be held in escrow.

![Alt text](./public/images/contract_info.png?raw=true "contract_info")

The flow of the contract is such that the contract to monitor for spam is funded (presumably by the friend that is being watched for spam), and these funds are then held in escrow by the contract. In the initial draft, there would be a default amount of ether sent to escrow (say 25 ether). In the future, the user would have the option to specify how much ether to send to the contract. If the friend being watched for spam does in fact exceed the specified maximum number of messages per minute, the smart contract will self-execute and send ether from escrow to the recipient's Ethereum account.

![Alt text](./public/images/deployed.png?raw=true "deployed")

In the future, this type of contract could ideally be deployed to the live blockchain, with the option to specify a maximum amount of gas to use for the contract, as well as login capabilites to enable users to see their active contracts, and kill any they are done with.

# Contributing

There is a lot to do, and developing with Ethereum is still relatively new. Any contributions are welcome!

# Acknowledgements

Inspiration for this project came from the MIT Future Commerce: Rebooting Markets, Money, Transactions & Security (MAS.S63) class. Special thanks to all our professors, as well as other students that helped us with this project.
