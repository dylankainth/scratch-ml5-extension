
class ScratchFetch {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "ML5.js",
            "name": "ML5.js Scratch Extension",
            "blocks": [
                        {
                            "opcode": "fetchURL",
                            "blockType": "reporter",
                            "text": "fetch data from [url]",
                            "arguments": {
                                "url": {
                                    "type": "string",
                                    "defaultValue": "https://api.weather.gov/stations/KNYC/observations"
                                },
                            }
                        },
                ],
        };
    }
    
    fetchURL({url}) {
        return fetch(url).then(response => response.text())
    }
    
    jsonExtract({name,data}) {
        var parsed = JSON.parse(data)
        if (name in parsed) {
            var out = parsed[name]
            var t = typeof(out)
            if (t == "string" || t == "number")
                return out
            if (t == "boolean")
                return t ? 1 : 0
            return JSON.stringify(out)
        }
        else {
            return ""
        }
    }
}

Scratch.extensions.register(new ScratchFetch())
