export const Color = {
    blueColor: {
        btnBlue: '#4AD2E4',
        btnBlueDark: '#000099',
        blue: '#027BFF',
        lightBlue: '#02BDFF',
        lightSkyBlue: '#CAF9FF',
        extraLightBlue: '#F4F4F8',
        xxLightBlue: '#F0F9FF',
        iconBlue: '#0066FF',
        blue100: '#0496FF',
        blue200: '#2CB5DD',
        blue300: '#6B4EFF',
        blue400: '#1530F5',
        blue500: '#330099',
        blue600: '#99CCFF',
        blue700: '#001B94',
        MALIBU: '#57C2FF',
        BRIGHT_BLUE: '#0066FF',
        ALICE_BLUE: '#F3F9FF',
        ALICE_LIGHT_BLUE: '#F1F6FF',
        PURPLE_BLUE: '#1811AC',
        WARM_BLUE: '#5B54D5',
        CORNFLOWER: '#5E77EF',
        SAPPHIRE: '#3046AE',
        FRENCH_SKY_BLUE: '#80BDFF',
        FRENCH_PASS: '#C7EAFF',
        SUMMER_SKY_BLUE: '#3597EC'
    },
    whiteColor: {
        white: '#ffffff',
        lightWhiteColor: '#CCCCCC',
        semiWhite: '#F8F8F8',
        white50: '#FFFCDC',
        transparentWhite: 'rgba(255, 255, 255, 0.25)',
    },

    blackColor: {
        black: '#000000',
        black100: '#222222',
        black50: '#999999',
        black200: '#666666',
        black300: '#555555',
        black400: '#242424',
        blackOpacity40: 'rgba(0, 0, 0, .4)',
    },

    greenColor: {
        green: '#06B300',
        green100: '#15B06D',
        green200: '#6FF1BC',
        Salem: '#099A4F',
        SalemLight: '#CEF5E1',
    },

    grayColor: {
        gray: '#EBEBEB',
        gray100: '#B2B2B2',
        lightGray: '#999999',
        lightGray100: '#555555', // this is by mistake will be removed if find this used anywhere it should be taken from black
        lightGray200: '#DDDDDD',
        lightGray300: '#F9F9F9',
        lightGray400: '#F4F4F4',
        platinumGray: '#E2E3E4',
        lightSilver: '#D9D9D9',
    },

    redColor: { red: '#FF1205', red100: '#C75656' },

    yellowColor: {
        yellow: '#FEB500',
        yellow100: '#FFA043',
        goldenYellow: '#EC9B0F',
        goldenYellowLight: '#FFCD75',
        goldenYellow100: '#FFA600',
        goldenYellow200: '#FFD030',
        greenishYellow: '#F9FFDF',
    },

    transparentColor: 'RGB(203,220,203).',
    border_lightGrey: '#CCCCCC',
};

export const hexToRgbA = (hex: string, opacity: number) => {
    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = `0x${c.join('')}`;
        return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${opacity})`;
    }
    throw new Error('Bad Hex');
};
