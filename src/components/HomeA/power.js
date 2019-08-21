const admin = [
    {
        "header": "User Management",
        "icon": "el-icon-location-outline",
        "childrens": [
            { "name": "Test", "path": "test" },
            { "name": "Map", "path": "map" }
        ]
    },
    {
        "header": "Order Management",
        "icon": "el-icon-menu",
        "childrens": [
            { "name": "Order List", "path": "orderManager" },
            { "name": "Loan Data", "path": "loanData" }
        ]
    },
    {
        "header": "Approval Management",
        "icon": "el-icon-tickets",
        "childrens": [
            { "name": "Preliminary Review List", "path": "chuShen" },
            { "name": "Final Review List", "path": "zhongShen" },
            { "name": "Review Statistics", "path": "shenTong" }
        ]
    },
    {
        "header": "Drainage Management",
        "icon": "el-icon-tickets",
        "childrens": [
            { "name": "Platform Management", "path": "platformManage" },
            { "name": "Platform Data", "path": "platManageInfo" }
        ]
    },
    {
        "header": "Collection Management",
        "icon": "el-icon-tickets",
        "childrens":[
            { "name": "S0Bill", "path": "s0Order" },
            { "name": "S1Bill", "path": "s1Order" },
            { "name": "S2Bill", "path": "s2Order" },
            { "name": "M2Bill", "path": "s2pOrder" },
            { "name": "M3Bill", "path": "s3Order" },
            { "name": "Bad debts", "path": "badDebt" },
            { "name": "Collection debts", "path": "collectionData" }
        ]
    },
    {
        "header": "Information Management",
        "icon": "el-icon-tickets",
        "childrens": [
            { "name": "Notice List", "path": "messageNotice" },
            { "name": "Banner List", "path": "banner" }
        ]
    },
    {
        "header": "Excessive Credit Management",
        "icon": "el-icon-tickets",
        "childrens": [
            { "name": "Party A Management", "path": "marketList" },
            { "name": "Excessive Credit Management", "path": "marketStatistics" }
        ]
    },
    {
        "header": "System Management",
        "icon": "el-icon-setting",
        "childrens": [
            { "name": "Account Setting", "path": "administrator" },
            { "name": "Version Log", "path": "version" },
            { "name": "Operate Log", "path": "operationLog" },
            { "name": "System Configuration", "path": "systemConfig" },
            { "name": "Risk Configuration", "path": "productConfig" }
        ]
    }

]



export default {admin}
