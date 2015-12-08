# Friendtract

Friendtract is an early first-stage prototype of a Dapp to enable smart contracts between friends. In this version, a smart contract is created between two friends who share a group in the GroupMe mobile app. The contract charges one of the friends if he spams the group (i.e. if he sends more than a set threshold number of messages per minute to the group).

This application is built using the Embark framework (https://github.com/hitchcott/meteor-embark) with Meteor. It is run using a local node on the Ethereum testrpc network. In this first attempt, real ether is not sent and the smart contracts are not called. This version is instead an effort to understand how the Embark framework works, and the feasibility of a more robust application.

Upon launching the application, the user is present with the option to create a new contract.

After selecting this option, they must fill out the requisite fields. The access token is obtained by creating a developer account on GroupMe (https://dev.groupme.com/) to access the API. The GroupId can also be found on the GroupMe site, and references the specific group a user wants the application to monitor for spam. The next input field is the GroupMe username of the friend to watch for spam, and the contract creator specifies what number of messages per minute qualifies as spam. The amount of ether to charge for spamming is specified, and the public key of the Ethereum account that will receive funds if there is spam. The account to fund escrow is the public key of the Ethereum contract that will be used to fund the contract.

The flow of the contract is such that the contract to monitor for spam is funded (presumably by the friend that is being watched for spam), and these funds are then held in escrow by the contract. If this friend does in fact exceed the specified maximum number of messages per minute, the smart contract will self-execute and send ether from escrow to the recipient's Ethereum account.

In the future, this type of contract could ideally be deployed to the live blockchain, and there would be an option to specify the maximum amount of gas to use for the contract, as well as a login to enable users to see their active contracts, and kill any they are done with.

** special thanks to @Firescar96 **
