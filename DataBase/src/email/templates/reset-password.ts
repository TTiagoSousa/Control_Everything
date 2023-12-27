export default function resetPasswordTemplate(resetPasswordLink: string): string {
    return `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              text-align: center;
            }
            .Container {
              width: 100%;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              text-align: center;
            }
            .Container .Title{
              width: 100%;
              background-color: #162231;
              padding-top: 5px;
              padding-bottom: 5px;
            }
            .Container .Title h1{
              color: #2c7be5;
            }
            .Container .Text{
              width: 100%;
              text-align: center;
            }
            .Container .Text p{
              font-family: Verdana, Geneva, Tahoma, sans-serif;
              font-weight: 600;
              color: #344050;
            }
            .Container .Resert_Link{
              width: 100%;
              background-color: #162231;
              padding-top: 10px;
              padding-bottom: 10px;
              align-items: center;
            }
            .Container .Resert_Link a{
              position: relative;
              width: 50%;
              height: auto;
              cursor: pointer;
            }
            .Container .Resert_Link a button{
              position: relative;
              width: 50%;
              height: 100%;
              display: inline-block;
              border-radius: 10px;
              background-color: #2c7be5;
              border: none;
              padding: 5px;
            }
            .Container .Resert_Link a button span{
              color: #ffffff;
              font-family: Verdana, Geneva, Tahoma, sans-serif;
              font-weight: 600;
            }
            .Container .Alternetive_Link{
              width: 100%;
              padding-top: 5px;
              padding-bottom: 5px;
              text-align: center;
            }
            .Container .Alternetive_Link p{
              font-family: Verdana, Geneva, Tahoma, sans-serif;
              font-weight: 600;
              color: #344050;
            }
          </style>
        </head>
        <body>
          <div class="Container">
            <div class="Title">
              <h1>Welcome to</h1>
              <h1>Control Everything</h1>
            </div>
            <div class="Text">
              <p>Hellow</p>
              <p>Click on the link to change your password:</p>
            </div>
            <div class="Resert_Link">
              <a href="${resetPasswordLink}" target="_blank">
                <button>
                  <span>Active Account</span>
                </button>
              </a>
            </div>
            <div class="Alternetive_Link">
              <p>If the button above does not work, you can also copy and paste the following link into your web browser:</p>
              <p>${resetPasswordLink}</p>
            </div>
          </div>
        </body>
      </html>
    `;
  };