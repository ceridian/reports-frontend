export interface TZ{
  to: number;
  from: number;
  abbr: string;
  value: string;
  labels: string[];
}

const Zones = [
  {
    to: 12,
    from: -12,
    abbr: "DST",
    "value": "Dateline Standard Time",
    labels: [
      "Etc/GMT-12"
    ]
  },{
    to: 11,
    from: -11,
    abbr: "U",
    "value": "UTC-11",
    labels: [
      "Pacific/Midway",
      "Pacific/Niue",
      "Pacific/Pago_Pago"
    ]
  },{
    to: 10,
    from: -10,
    abbr: "HST",
    "value": "Hawaiian Standard Time",
    labels: [
      "Pacific/Honolulu",
      "Pacific/Johnston",
      "Pacific/Rarotonga",
      "Pacific/Tahiti"
    ]
  },{
    to: 9,
    from: -9,
    abbr: "AKDT",
    "value": "Alaskan Standard Time",
    labels: [
      "America/Anchorage",
      "America/Juneau",
      "America/Nome",
      "America/Sitka",
      "America/Yakutat"
    ]
  },{
    to: 8,
    from: -8,
    abbr: "PST",
    "value": "Pacific Standard Time",
    labels: [
      "America/Dawson",
      "America/Los_Angeles",
      "America/Tijuana",
      "America/Vancouver",
      "America/Whitehorse",
      "PST8PDT"
    ]
  },{
    to: 7,
    from: -7,
    abbr: "MST",
    "value": "Mountain Standard Time",
    labels: [
      "America/Creston",
      "America/Dawson_Creek",
      "America/Hermosillo",
      "America/Phoenix",
      "Etc/GMT+7",
      "America/Boise",
      "America/Cambridge_Bay",
      "America/Denver",
      "America/Edmonton",
      "America/Inuvik",
      "America/Ojinaga",
      "America/Yellowknife",
      "MST7MDT"
    ]
  },{
    to: 6,
    from: -6,
    abbr: "CST",
    "value": "Central Standard Time",
    labels: [
      "America/Chicago",
      "America/Indiana/Knox",
      "America/Indiana/Tell_City",
      "America/Matamoros",
      "America/Menominee",
      "America/North_Dakota/Beulah",
      "America/North_Dakota/Center",
      "America/North_Dakota/New_Salem",
      "America/Rainy_River",
      "America/Rankin_Inlet",
      "America/Resolute",
      "America/Winnipeg",
      "CST6CDT"
    ]
  },{
    to: 5,
    from: -5,
    abbr: "EST",
    "value": "Eastern Standard Time",
    labels: [
      "America/Detroit",
      "America/Havana",
      "America/Indiana/Petersburg",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Iqaluit",
      "America/Kentucky/Monticello",
      "America/Louisville",
      "America/Montreal",
      "America/Nassau",
      "America/New_York",
      "America/Nipigon",
      "America/Pangnirtung",
      "America/Port-au-Prince",
      "America/Thunder_Bay",
      "America/Toronto",
      "EST5EDT"
    ]
  },{
    to: 4,
    from: -4,
    "value": "Atlantic Standard Time",
    abbr: "AST",
    labels: [
      "America/Glace_Bay",
      "America/Goose_Bay",
      "America/Halifax",
      "America/Moncton",
      "America/Thule",
      "Atlantic/Bermuda"
    ]
  },{
    to: 3,
    from: -3,
    abbr: "WGT",
    "value": "Westren Greenland Time",
    labels: [
      "America/Godthab"
    ]
  },{
    to: 2,
    from: -2,
    abbr: "EGT",
    "value": "Eastren Greenland Time",
    labels: [
      "Etc/GMT-2"
    ]
  },{
    to: 1,
    from: -1,
    "value": "Mid-Atlantic Standard Time",
    abbr: "MDT",
    labels: [
      "Etc/GMT-1"
    ]
  },{
    to: 0,
    from: 0,
    "value": "Greenwich Mean Time",
    abbr: "GMT",
    labels: [
      "Etc/GMT"
    ]
  },{
    to: -1,
    from: 1,
    abbr: "CET",
    "value": "Central Europe Time",
    labels: [
      "Etc/GMT+1",
      "Arctic/Longyearbyen",
      "Europe/Amsterdam",
      "Europe/Andorra",
      "Europe/Berlin",
      "Europe/Busingen",
      "Europe/Gibraltar",
      "Europe/Luxembourg",
      "Europe/Malta",
      "Europe/Monaco",
      "Europe/Oslo",
      "Europe/Rome",
      "Europe/San_Marino",
      "Europe/Stockholm",
      "Europe/Vaduz",
      "Europe/Vatican",
      "Europe/Vienna",
      "Europe/Zurich"
    ]
  },{
    to: -2,
    from: 2,
    abbr: "EET",
    "value": "Central Europe Time",
    labels: [
      "Etc/GMT+2",
      "Europe/Belgrade",
      "Europe/Bratislava",
      "Europe/Budapest",
      "Europe/Ljubljana",
      "Europe/Podgorica",
      "Europe/Prague",
      "Europe/Tirane"
    ]
  },{
    to: -3,
    from: 3,
    abbr: "MSK",
    "value": "Moscow Standard Time",
    labels: [
      "Etc/GMT+3",
      "Europe/Kirov",
      "Europe/Moscow",
      "Europe/Simferopol",
      "Europe/Volgograd"
    ]
  },{
    to: -4,
    from: 4,
    "value": "Arabian Standard Time",
    abbr: "AST",
    labels: [
      "Asia/Dubai",
      "Asia/Muscat",
      "Etc/GMT+4"

    ]
  },{
    to: -5,
    from: 5,
    "value": "West Asia Standard Time",
    abbr: "WAT",
    labels: [
      "Etc/GMT+5",
      "Antarctica/Mawson",
      "Asia/Aqtau",
      "Asia/Aqtobe",
      "Asia/Ashgabat",
      "Asia/Dushanbe",
      "Asia/Oral",
      "Asia/Samarkand",
      "Asia/Tashkent",
      "Indian/Kerguelen",
      "Indian/Maldives"
    ]
  },{
    to: -6,
    from: 6,
    "value": "Central Asia Standard Time",
    abbr: "CAST",
    labels: [
      "Antarctica/Vostok",
      "Asia/Almaty",
      "Asia/Bishkek",
      "Asia/Qyzylorda",
      "Asia/Urumqi",
      "Etc/GMT+6",
      "Indian/Chagos"
    ]
  },{
    to: -7,
    from: 7,
    "value": "SE Asia Standard Time",
    abbr: "SAST",
    labels: [
      "Antarctica/Davis",
      "Asia/Bangkok",
      "Asia/Hovd",
      "Asia/Jakarta",
      "Asia/Phnom_Penh",
      "Asia/Pontianak",
      "Asia/Saigon",
      "Asia/Vientiane",
      "Etc/GMT+7",
      "Indian/Christmas"
    ]
  },{
    to: -8,
    from: 8,
    "value": "China Standard Time",
    abbr: "CST",
    labels: [
      "Etc/GMT+8",
      "Asia/Hong_Kong",
      "Asia/Macau",
      "Asia/Shanghai"
    ]
  },{
    to: -9,
    from: 9,
    "value": "Japan Standard Time",
    abbr: "JST",
    labels: [
      "Asia/Dili",
      "Asia/Jayapura",
      "Asia/Tokyo",
      "Etc/GMT+9",
      "Pacific/Palau"
    ]
  },{
    to: -10,
    from: 10,
    abbr: "AEST",
    "value": "AUS Eastern Standard Time",
    labels: [
      "Australia/Melbourne",
      "Australia/Sydney"
    ]
  },{
    to: -11,
    from: 11,
    abbr: "CPST",
    "value": "Central Pacific Standard Time",
    labels: [
      "Antarctica/Macquarie",
      "Etc/GMT+11",
      "Pacific/Efate",
      "Pacific/Guadalcanal",
      "Pacific/Kosrae",
      "Pacific/Noumea",
      "Pacific/Ponape"
    ]
  },{
    to: -12,
    from: 12,
    "value": "New Zealand Standard Time",
    abbr: "NZST",
    labels: [
      "Antarctica/McMurdo",
      "Pacific/Auckland"
    ]
  },
];

export {Zones};