export const tabsArr = [
    {
        name: "Nové",
        status: "RECIEVED"
    },
    {
        name: "Spracované",
        status: "APPROVED"
    },
    {
        name: "Dokončené",
        status: "FINISHED"
    },
    {
        name: "Zrušené",
        status: "CANCELED"
    },
]

export const getStatusColor = (status) => {
    console.log(status)
    if(!status) return

    if(status === "APPROVED") {
        return "black"
    }
    if(status === "CANCELED") {
        return "red"
    }
    if(status === "FINISHED") {
        return "green"
    }
    if(status === "RECIEVED") {
        return "gray"
    }
}

export const getStatusTranslate = (statusStr) => {
    if(!statusStr) return

    if(statusStr === "APPROVED") {
        return "Spracovaná"
    }
    if(statusStr === "CANCELED") {
        return "Zrušená"
    }
    if(statusStr === "FINISHED") {
        return "Dokončená"
    }
    if(statusStr === "RECIEVED") {
        return "Nespracovaná"
    }
}

export const getConfiguratorDataTranslate = (str) => {
    if(!str) return

    if(str === "chargingOptions") {
        return "Nabíjanie"
    }
    if(str === "cabelOptions") {
        return "Kábel"
    }
    if(str === "positionOptions") {
        return "Poloha"
    }
    if(str === "buyOptions") {
        return "Spôsob úhrady"
    }
    if(str === "authOptions") {
        return "Authorizácie"
    }
    if(str === "wifiOptions") {
        return "Wifi"
    }
    if(str === "eleOptions") {
        return "Elektromer"
    }
    if(str === "servicesOptions") {
        return "Doplnky"
    }
    if(str === "stationsOptions") {
        return "Počet stojanov"
    }
    if(str === "smartSolutionsOptions") {
        return "Smart riešenia"
    }
    if(str === "chargingNetworkOptions") {
        return "Nabíjacia sieť"
    }
}