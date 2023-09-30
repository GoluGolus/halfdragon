import fetch from 'https';



const botToken = 'MTE1NjkxMzExMTA2OTA5Nzk4NA.GqX3U9.SgtmuahIkyDnt-lx0b0_NJdBafUpW2tHjwm9dQ';
const userId = '681840671036014677';

async function getUserProfilePicture() {
  try {
    const response = await fetch(`https://discord.com/api/v10/users/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bot ${botToken}`,
      },
    });

    if (response.ok) {
      const user = await response.json();
      const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${user.avatar}.png`;
      return avatarUrl;
    } else {
      throw new Error(`Failed to fetch user data. Status code: ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

getUserProfilePicture()
  .then((avatarUrl) => {
    console.log('Profile Picture URL:', avatarUrl);
  })
  .catch((error) => {
    console.error('Failed to retrieve profile picture:', error.message);
  });