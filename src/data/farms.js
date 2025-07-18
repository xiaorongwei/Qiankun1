const baseUrl = import.meta.env.BASE_URL || '/dist'
const farms = [
    {
        id: 1,
        name: '乾坤有機生態農場',
        contactPerson: '王乾坤',
        phone: '0937692657',
        address: '屏東縣萬巒鄉新厝村6鄰新平路73號',
        products: [
            { products_name: '荔枝', products_logo: `${baseUrl}farms/products/litchi_2.jpg` },
            { products_name: '芭樂', products_logo: `${baseUrl}farms/products/guava.jpg` }
        ],
        isOrganic: true,
        website: 'https://www.facebook.com/ChienKunFarm/',
        logo: `${baseUrl}farms/Qiankun.jpg`
    },
    {
        id: 2,
        name: '尤家有機檸檬園',
        contactPerson: '翁錦珍',
        phone: '0956291265 & 08-7758050',
        address: '屏東縣里港鄉茄冬村茄冬路7號',
        products: [{ products_name: '檸檬', products_logo: `${baseUrl}farms/products/lemon.jpg` }],
        isOrganic: true,
        website: 'https://www.facebook.com/liganglemon/',
        logo: `${baseUrl}farms/lemon.jpg`
    },
    {
        id: 3,
        name: '永勝有機園',
        contactPerson: '吳永勝',
        phone: '0925769192',
        address: '屏東縣瑪家鄉三和村美園31號',
        products: [
            { products_name: '木瓜', products_logo: `${baseUrl}farms/products/papaya.jpg` },
            { products_name: '蕃茄', products_logo: `${baseUrl}farms/products/tomato.jpg` }
        ],
        isOrganic: true,
        website: 'https://www.facebook.com/as443/',
        logo: `${baseUrl}farms/YongshengOrganicGarden.jpg`
    },
    {
        id: 4,
        name: '蘇蔡農場',
        contactPerson: '蔡昌殷',
        phone: '0932733072',
        address: '高雄市大寮區大發工業區華中路28號',
        products: [{ products_name: '火龍果', products_logo: '' }],
        isOrganic: true,
        website: 'https://www.facebook.com/sutsaifarm',
        logo: `${baseUrl}farms/sucai_farm.jpg`
    },
    {
        id: 5,
        name: '屏東農夫金銀花',
        contactPerson: '黃穎',
        phone: '0937384919',
        address: '屏東縣竹田鄉二崙村義和路2-50號',
        products: [
            {
                products_name: '金銀花及金銀花相關產品',
                products_logo: `${baseUrl}farms/products/daylily.jpg`
            }
        ],
        isOrganic: true,
        website: 'https://www.facebook.com/552gphxb',
        logo: `${baseUrl}farms/jinyinhua.jpg`
    },
    {
        id: 6,
        name: '巴轆星宿有機農園',
        contactPerson: '張魯華',
        phone: '0932883448',
        address: '屏東市廣興里廣興126-5號',
        products: [
            { products_name: '檸檬', products_logo: `${baseUrl}farms/products/balu_lemon.jpg` },
            { products_name: '金桔', products_logo: '' }
        ],
        isOrganic: true,
        website: 'https://www.facebook.com/baruorganicfarm/',
        logo: `${baseUrl}farms/barao.jpg`
    },
    {
        id: 7,
        name: '新興果農',
        contactPerson: '徐振鐘',
        phone: '0912499603',
        address: '屏東縣竹田鄉泗洲村洲中路52號',
        products: [
            { products_name: '本土酪梨', products_logo: '' },
            { products_name: '紅毛丹', products_logo: '' },
            {
                products_name: '山竹',
                products_logo: `${baseUrl}farms/products/xinxing_mangosteen.jpg`
            }
        ],
        isOrganic: true,
        website: 'https://www.i-organic.org.tw/farm/HOAF1169/',
        logo: ''
    },
    {
        id: 8,
        name: '成德寬居農場',
        contactPerson: '李宗達',
        phone: '0918092890',
        address: '屏東縣萬巒鄉信敏路207號',
        products: [
            { products_name: '澳洲茶樹', products_logo: '' },
            { products_name: '洛神', products_logo: '' }
        ],
        isOrganic: true,
        website: 'https://www.facebook.com/people/成德寬居有機農場/100079519153768/',
        logo: `${baseUrl}farms/chengde.jpg`
    },
    {
        id: 9,
        name: '',
        contactPerson: '鄭水智',
        phone: '0910216757',
        address: '高雄市左營區辛亥路78號11樓',
        products: [],
        isOrganic: true,
        website: '',
        logo: ''
    },
    {
        id: 10,
        name: '林家有機農園',
        contactPerson: '林良儒',
        phone: '0989155503',
        address: '屏東縣新埤鄉打鐵村東興路108號',
        products: [
            { products_name: '香蕉', products_logo: `${baseUrl}farms/products/lin_banana.jpg` },
            {
                products_name: '黃金果',
                products_logo: `${baseUrl}farms/products/lin_goldenfruit.jpg`
            },
            { products_name: '龍眼', products_logo: '' },
            { products_name: '芭樂', products_logo: '' },
            { products_name: '芒果', products_logo: '' },
            { products_name: '刺果番荔枝', products_logo: '' },
            { products_name: '釋迦', products_logo: '' },
            { products_name: '鳳梨', products_logo: '' }
        ],
        isOrganic: true,
        website: '',
        logo: ''
    },
    {
        id: 11,
        name: '武山老棠農業有限公司',
        contactPerson: '蔡瑞棠',
        phone: '0935669533',
        address: '屏東縣內埔鄉水門村忠孝路270號',
        products: [{ products_name: '芒果', products_logo: `${baseUrl}farms/products/mango.jpg` }],
        isOrganic: true,
        website: 'http://ushop30005.ec99.tw/',
        logo: `${baseUrl}farms/wushan.jpg`
    },
    {
        id: 12,
        name: '',
        contactPerson: '莊奇陵',
        phone: '',
        address: '',
        products: [],
        isOrganic: true,
        website: '',
        logo: ''
    },
    {
        id: 13,
        name: '趣訪有機農園',
        contactPerson: '張東明',
        phone: '0932371107',
        address: '屏東縣萬巒鄉佳和村光明路2-2號',
        products: [
            { products_name: '有機可可堅果', products_logo: '' },
            { products_name: '有機全脂可可粉', products_logo: '' },
            { products_name: '有機可可豆茶', products_logo: '' },
            { products_name: '有機可可豆+桂花茶', products_logo: '' },
            { products_name: 'tree to bar 100%黑巧克力', products_logo: '' },
            { products_name: 'tree to bar 88%黑巧克力', products_logo: '' }
        ],
        isOrganic: true,
        website: 'https://www.facebook.com/QuFangFarm/?locale=zh_TW',
        logo: `${baseUrl}farms/qufang_cocoa.jpg`
    },
    {
        id: 14,
        name: '小哥的果香屋',
        contactPerson: '吳文忠',
        phone: '',
        address: '',
        products: [
            {
                products_name: '黃金果',
                products_logo: `${baseUrl}farms/products/goldenfruit_14.jpg`
            }
        ],
        isOrganic: true,
        website: 'https://www.facebook.com/people/小哥的果香屋/100064059218623/',
        logo: ''
    }
]

export default farms
