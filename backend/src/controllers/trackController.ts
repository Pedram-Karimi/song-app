import { google } from "googleapis";
import fs from "fs";
import path from "path";

const clientId =
  "664591249050-e6q4bgd1sf78hgegsupe5i2uckipf151.apps.googleusercontent.com";
const clientSecret = "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";
const redirectUrl = "https://developers.google.com/oauthplayground";
const refreshToken =
  "1//04lumNPdU4z5-CgYIARAAGAQSNwF-L9IrBha8BzsFZFD9bJNCFCPQUkdEU5lbRpRdmMpz0rnKIESlV2uUR76U0TApM6mhbspvNRE";

const oauth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  redirectUrl
);

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

oauth2Client.setCredentials({ refresh_token: refreshToken });

const filePath = path.join(__dirname, "text.txt");
// my code ---

const uploadTracks = async (req: any, res: any) => {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: "first_file",
        mimeType: "text/plain",
      },
      media: {
        mimeType: "text/plain",
        body: fs.createReadStream(filePath),
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
  }
};
//
const getTracks = async (req: any, res: any) => {};

export { uploadTracks, getTracks };

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
