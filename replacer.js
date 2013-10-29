/* 
 * A testing Chrome Extension for celebrating the birthday of Academician Shi the Great.
 * by Pengyu CHEN (cpy.prefers.you[at]gmail.com)
 * COPYLEFT, ALL WRONGS RESERVED.
 */

/* data from http://zh.wikipedia.org/wiki/%E7%99%BE%E5%AE%B6%E5%A7%93#2006.E5.B9.B41.E6.9C.88 */
var surnames = ["李", "王", "张", "刘", "陈", "杨", "黄", "赵", "周", "吴", 
    "徐", "孙", "朱", "马", "胡", "郭", "林", "何", "高", "梁", "郑", "罗", 
    "宋", "谢", "唐", "韩", "曹", "许", "邓", "萧", "冯", "曾", "程", "蔡", 
    "彭", "潘", "袁", "于", "董", "余", "苏", "叶", "吕", "魏", "蒋", "田", 
    "杜", "丁", "沈", "姜", "范", "江", "傅", "钟", "卢", "汪", "戴", "崔", 
    "任", "陆", "廖", "姚", "方", "金", "邱", "丘", "夏", "谭", "韦", "贾", 
    "邹", "石", "熊", "孟", "秦", "阎", "薛", "侯", "雷", "白", "龙", "段", 
    "郝", "孔", "邵", "史", "毛", "常", "万", "顾", "赖", "武", "康", "贺", 
    "严", "尹", "钱", "施", "牛", "洪", "龚", "汤", "陶", "黎", "温", "莫", 
    "易", "樊", "乔", "文", "安", "殷", "颜", "庄", "章", "鲁", "倪", "庞", 
    "邢", "俞", "翟", "蓝", "聂", "齐", "向", "申", "葛", "岳", "伍", "覃", 
    "骆", "关", "焦", "柳", "欧", "祝", "纪", "尚", "毕", "耿", "芦", "左", 
    "季", "管", "符", "辛", "苗", "詹", "曲", "欧阳", "靳", "祁", "路", "涂", 
    "兰", "甘", "裴", "梅", "童", "翁", "霍", "游", "阮", "尤", "舒", "柯", 
    "牟", "滕", "谷", "柴", "卜", "成", "饶", "宁", "凌", "盛", "查", "单", 
    "冉", "鲍", "华", "包", "屈", "房", "喻", "解", "蒲", "卫", "简", "时", 
    "连", "车", "项", "闵", "邬", "吉", "党", "阳", "司", "费", "蒙", "席", 
    "晏", "隋", "古", "强", "穆", "姬", "宫", "景", "米", "麦", "谈", "柏", 
    "瞿", "艾", "沙", "鄢", "桂", "窦", "郁", "缪", "畅", "巩", "卓", "褚", 
    "栾", "戚", "全", "娄", "甄", "郎", "池", "丛", "边", "岑", "农", "苟",
    "迟", "保", "商", "臧", "佘", "卞", "虞", "刁", "冷", "应", "匡", "栗", 
    "仇", "练", "楚", "揭", "师", "官", "佟", "封", "燕", "桑", "巫", "敖", 
    "原", "植", "邝", "仲", "荆", "储", "宗", "楼", "干", "苑", "寇", "盖", 
    "南", "屠", "鞠", "荣", "井", "乐", "银", "奚", "明", "麻", "雍", "花", 
    "闻", "冼", "木", "郜", "廉", "衣", "蔺", "和", "冀", "占", "公", "门", 
    "帅", "利", "满"];

function _HTML_surname_replace(surnames, replace_fullname, replace_surname, suffix)
{
    var tmp = [];
    tmp = tmp.concat(surnames.map(function(x){ return "(" + x + "." + suffix + ")"; }));
    tmp = tmp.concat(surnames.map(function(x){ return "(" + x + ".." + suffix + ")"; }));
    var pattern_fullname = tmp.join("|");
    console.log(pattern_fullname);
    document.body.innerHTML = 
        document.body.innerHTML.replace(new RegExp(pattern_fullname, "g"), replace_fullname + suffix);

    var tmp = surnames.map(function(x){ return "(" + x + suffix + ")"; });
    var pattern_surname = tmp.join("|");
    document.body.innerHTML = 
        document.body.innerHTML.replace(new RegExp(pattern_surname, "g"), replace_surname + suffix);

    return;
}

_HTML_surname_replace(surnames, "施阳天", "施", "院士")
_HTML_surname_replace(surnames, "施阳天", "施", "<em>院士") /* for titles in Google Search results */

