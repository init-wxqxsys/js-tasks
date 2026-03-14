let r1 = safeParse('{"ok":true}');       // должно вернуть объект
let r2 = safeParse('это не json!!');     // должно вернуть null

function safeParse(json) {
    try {
        return JSON.parse(json);
    }
    catch {
        return null;
    }
};

