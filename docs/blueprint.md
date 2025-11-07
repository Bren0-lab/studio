# **App Name**: CyberHome

## Core Features:

- User Authentication: Implement Google Sign-in or Email/Password authentication to secure user data.
- Real-time Device Monitoring: Automatically update total energy consumption and device list based on changes in the Firestore 'devices' collection.
- Remote Device Control: Update the 'on' field in Firestore when a device's switch is toggled in the app.
- Fixed Plant Mapping: Display a fixed plant layout with adjustable CSS to match provided image, mapping rooms via percentages of top, left, width, and height.
- Device Placement Tool: Enable users to map devices on the plant layout by clicking and saving x and y coordinates in Firestore, with visual pins reflecting the device's 'on' state using neon orange.
- Unmapped Device Finder: Locate devices missing xy coordinates with a tool that helps place these unmapped devices.

## Style Guidelines:

- Primary color: Neon Orange (#ff6a00) for highlighting interactive elements.
- Background color: Deep Black (#000000) to evoke a 'Power Grid Cyber-LED' theme.
- Secondary color: Dark Gray (#151515) for card backgrounds to maintain a dark aesthetic.
- Font: 'Inter' sans-serif for both headlines and body text, offering a clean and modern look.
- Note: currently only Google Fonts are supported.
- Use LED-style icons to represent device statuses and functionalities.
- Multi-tab layout (Monitoramento, Planta, Configurações) for clear navigation and separation of concerns.
- Subtle glow effects on active device pins to enhance the Cyber-LED theme.