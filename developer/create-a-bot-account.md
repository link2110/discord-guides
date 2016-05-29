# Create a Bot Account
Explains the basics behind creating OAuth Applications and Discord Bot accounts.

###  Step 1: Creating an Application
In order to create a bot account, an application must exist for it to be bound to.
To do this, visit https://discordapp.com/developers/applications/me, login and press *"New Application"*, as shown below.

![New Application](https://my.mixtape.moe/nhihvn.png)

After doing so, you shall be shown a screen asking for the Application's information. Remember, this is not the bots info and that this will be shown to users when the bot is added via the OAuth page.

> Example OAuth Page: https://discordapp.com/oauth2/authorize?&client_id=168083414602219521&scope=bot

Fill in this form (redirect URIs are optional), it may be edited at a later date.

***

### Step 2: Adding a Bot User

Now that you have an application, you will probably want to attach a Bot User to it, for simple interaction with discord and its API, to do this press the *"Create Bot User"* button on your application's page.

![Adding a Bot User](https://my.mixtape.moe/yxoncy.png)

After creating the bot you will be shown its current username, ID and Token, this Token can be used to login to the bot through the various libraries available, a list of compliant libraries can be found at https://discordapp.com/developers/docs/topics/libraries.
