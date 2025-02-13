var config_data = `
{
  "title": "Scouting PASS 2025",
  "page_title": "Reefscape",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "Tank<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Electrical Protection",
      "code": "electricalProt",
      "type": "radio",
      "choices": {
        "1": "Untrustworthy",
        "2": "Questionable",
        "3": "Trustworthy"
      },
      "defaultValue": "0",
      "tooltip": "how shielded are components and wires; are wires likely to get pulled"
    },
    { "name": "Electrical Organization",
      "code": "electricalOrg",
      "type": "radio",
      "choices": {
        "1": "Untrustworthy",
        "2": "Questionable",
        "3": "Trustworthy"
      },
      "defaultValue": "0"
    },
    { "name": "Electrical Tape?",
      "code": "elecTape",
      "type": "bool"
    },
    { "name": "Solder + Heat Shrink?",
      "code": "solder",
      "type": "bool"
    },
    { "name": "Pinch Connectors? (ie Anderson)",
      "code": "pinchConn",
      "type": "bool"
    },
    { "name": "Reversible Bumpers",
      "code": "bumpRev",
      "type": "bool"
    },
    { "name": "Bumper Attachment",
      "code": "bumperAtt",
      "type": "radio",
      "choices": {
        "1": "Untrustworthy",
        "2": "Questionable",
        "3": "Trustworthy"
      },
      "defaultValue": "0"
    },
    { "name": "Bumper Comments",
      "code": "bumper_comment",
      "type": "text"
    },
    { "name": "Comments",
      "code": "pitCom",
      "type": "text",
      "size": 30
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;