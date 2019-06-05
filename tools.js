export const forEach = (arr, fn) => {
    if (!arr.length || !fn) return
    let i = -1
    let len = arr.length
    while (++i < len) {
        let item = arr[i]
        fn(item, i, arr)
    }
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const getIntersection = (arr1, arr2) => {
    let len = Math.min(arr1.length, arr2.length)
    let i = -1
    let res = []
    while (++i < len) {
        const item = arr2[i]
        if (arr1.indexOf(item) > -1) res.push(item)
    }
    return res
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arr1, arr2) => {
    return Array.from(new Set([...arr1, ...arr2]))
}

/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (targetarr, arr) => {
    return targetarr.some(_ => arr.indexOf(_) > -1)
}

/**
 * @param {String|Number} value 要验证的字符串或数值
 * @param {*} validList 用来验证的列表
 */
export function oneOf(value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true
        }
    }
    return false
}

/**
 * @param {Number} timeStamp 判断时间戳格式是否是毫秒
 * @returns {Boolean}
 */
const isMillisecond = timeStamp => {
    const timeStr = String(timeStamp)
    return timeStr.length > 10
}

/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} currentTime 当前时间时间戳
 * @returns {Boolean} 传入的时间戳是否早于当前时间戳
 */
const isEarly = (timeStamp, currentTime) => {
    return timeStamp < currentTime
}

/**
 * @param {Number} num 数值
 * @returns {String} 处理后的字符串
 * @description 如果传入的数值小于10，即位数只有1位，则在前面补充0
 */
const getHandledValue = num => {
    return num < 10 ? '0' + num : num
}

/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} startType 要返回的时间字符串的格式类型，传入'year'则返回年开头的完整时间
 */
const getDate = (timeStamp, startType) => {
    const d = new Date(timeStamp * 1000)
    const year = d.getFullYear()
    const month = getHandledValue(d.getMonth() + 1)
    const date = getHandledValue(d.getDate())
    const hours = getHandledValue(d.getHours())
    const minutes = getHandledValue(d.getMinutes())
    const second = getHandledValue(d.getSeconds())
    let resStr = ''
    if (startType === 'year') resStr = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + second
    else resStr = month + '-' + date + ' ' + hours + ':' + minutes
    return resStr
}

/**
 * @param {String|Number} timeStamp 时间戳
 * @returns {String} 相对时间字符串
 */
export const getRelativeTime = timeStamp => {
    // 判断当前传入的时间戳是秒格式还是毫秒
    const IS_MILLISECOND = isMillisecond(timeStamp)
    // 如果是毫秒格式则转为秒格式
    if (IS_MILLISECOND) Math.floor(timeStamp /= 1000)
    // 传入的时间戳可以是数值或字符串类型，这里统一转为数值类型
    timeStamp = Number(timeStamp)
    // 获取当前时间时间戳
    const currentTime = Math.floor(Date.parse(new Date()) / 1000)
    // 判断传入时间戳是否早于当前时间戳
    const IS_EARLY = isEarly(timeStamp, currentTime)
    // 获取两个时间戳差值
    let diff = currentTime - timeStamp
    // 如果IS_EARLY为false则差值取反
    if (!IS_EARLY) diff = -diff
    let resStr = ''
    const dirStr = IS_EARLY ? '前' : '后'
    // 少于等于59秒
    if (diff <= 59) resStr = diff + '秒' + dirStr
    // 多于59秒，少于等于59分钟59秒
    else if (diff > 59 && diff <= 3599) resStr = Math.floor(diff / 60) + '分钟' + dirStr
    // 多于59分钟59秒，少于等于23小时59分钟59秒
    else if (diff > 3599 && diff <= 86399) resStr = Math.floor(diff / 3600) + '小时' + dirStr
    // 多于23小时59分钟59秒，少于等于29天59分钟59秒
    else if (diff > 86399 && diff <= 2623859) resStr = Math.floor(diff / 86400) + '天' + dirStr
    // 多于29天59分钟59秒，少于364天23小时59分钟59秒，且传入的时间戳早于当前
    else if (diff > 2623859 && diff <= 31567859 && IS_EARLY) resStr = getDate(timeStamp)
    else resStr = getDate(timeStamp, 'year')
    return resStr
}

/**
 * @returns {String} 当前浏览器名称
 */
export const getExplorer = () => {
    const ua = window.navigator.userAgent
    const isExplorer = (exp) => {
        return ua.indexOf(exp) > -1
    }
    if (isExplorer('MSIE')) return 'IE'
    else if (isExplorer('Firefox')) return 'Firefox'
    else if (isExplorer('Chrome')) return 'Chrome'
    else if (isExplorer('Opera')) return 'Opera'
    else if (isExplorer('Safari')) return 'Safari'
}

/**
 * @description 绑定事件 on(element, event, handler)
 */
export const on = (function () {
    if (document.addEventListener) {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false)
            }
        }
    } else {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler)
            }
        }
    }
})()

/**
 * @description 解绑事件 off(element, event, handler)
 */
export const off = (function () {
    if (document.removeEventListener) {
        return function (element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false)
            }
        }
    } else {
        return function (element, event, handler) {
            if (element && event) {
                element.detachEvent('on' + event, handler)
            }
        }
    }
})()

/**
 * 判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
 * 如果没有传入key这个参数，则判断obj对象是否有键值对
 */
export const hasKey = (obj, key) => {
    if (key) return key in obj
    else {
        let keysArr = Object.keys(obj)
        return keysArr.length
    }
}

/**
 * @param {*} obj1 对象
 * @param {*} obj2 对象
 * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 */
export const objEqual = (obj1, obj2) => {
    const keysArr1 = Object.keys(obj1)
    const keysArr2 = Object.keys(obj2)
    if (keysArr1.length !== keysArr2.length) return false
    else if (keysArr1.length === 0 && keysArr2.length === 0) return true
    /* eslint-disable-next-line */
    else return !keysArr1.some(key => obj1[key] != obj2[key])
}


// 时间戳转换为日期格式
const add = (m) => { return m < 10 ? '0' + m : m }
export const formdata = (shijianchuo) => {
    // shijianchuo是整数，否则要parseInt转换
    var time = new Date(Number(shijianchuo))
    var y = time.getFullYear()
    var m = time.getMonth() + 1
    var d = time.getDate()
    var h = time.getHours()
    var mm = time.getMinutes()
    var s = time.getSeconds()
    // return  add0(m) + '月' + add0(d) + '日';
    return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}

// 数组a是否包含数组b
export const isContained = (a, b) => {
    if (!(a instanceof Array) || !(b instanceof Array))
        return false;
    if (a.length < b.length)
        return false;
    var aStr = a.toString();
    for (var i = 0, len = b.length; i < len; i++) {
        if (aStr.indexOf(b[i]) == -1)
            return false;
    }
    return true;
}

// 转换文件格式大小
export const renderSize = (value) => {
    if (value == null || value == '') {
        return '0 B'
    }
    var unitArr = new Array('B', 'K', 'M', 'G', 'T', 'PB', 'EB', 'ZB', 'YB')
    var index = 0
    var srcsize = parseFloat(value)
    index = Math.floor(Math.log(srcsize) / Math.log(1024))
    var size = srcsize / Math.pow(1024, index)
    size = size.toFixed(1)// 保留的小数位数
    return size + unitArr[index]
}

// 获取当前当前时间前四年、四个季度、四个月、四个星期
function getXdata(type = 1, index = 1) {
    var date = new Date;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var changeArr = [
        { value: '一', id: 1 },
        { value: '二', id: 2 },
        { value: '三', id: 3 },
        { value: '四', id: 4 },
        { value: '五', id: 5 },
        { value: '六', id: 6 },
        { value: '七', id: 7 },
        { value: '八', id: 8 },
        { value: '九', id: 9 },
        { value: '十', id: 10 },
        { value: '十一', id: 11 },
        { value: '十二', id: 12 },
    ]
    if (index == 0) {
        var arr = [];
        for (var i = 0; i < 4; i++) {
            if (--month < 1) {
                month = 12;
                year--;
            }
            let res = changeArr.find(el => el.id == month).value;
            arr.push(year + '年' + res + '月份');
        }
        arr.reverse(arr)
        if (type == 1) {
            this.xdata1 = arr;
        } else if (type == 2) {
            this.xdata1_1 = arr;
        }
    } else if (index == 1) {
        var arr = [];
        var q = Math.floor((month + 2) / 3);
        for (var i = 0; i < 4; i++) {
            if (--q < 1) {
                q = 4;
                year--;
            }
            let res = changeArr.find(el => el.id == q).value;
            arr.push(year + '年' + res + '季度');
        }
        arr.reverse(arr)
        if (type == 1) {
            this.xdata1 = arr;
        } else if (type == 2) {
            this.xdata1_1 = arr;
        }
    } else if (index == 2) {
        var arr = [];
        for (var i = 0; i < 4; i++) {
            year--;
            arr.push(year + '年');
        }
        arr.reverse(arr)
        if (type == 1) {
            this.xdata1 = arr;
        } else if (type == 2) {
            this.xdata1_1 = arr;
        }
    } else if (index == 3) {
        if (type == 1) {
            this.xdata1 = ['第一星期', '第二星期', '第三星期', '第四星期'];
        } else if (type == 2) {
            this.xdata1_1 = ['第一星期', '第二星期', '第三星期', '第四星期'];
        }
    }
};

/**
 * 解决转json自动四舍五入问题
 * @param res
 * @returns {*}
 */
export const replaceRes = (res) => {
    var formatStr = res.replace(/\:\ *(\d*?)\ *(\,|\})/g, (a, b, c, d, e) => {
        if (e.substr(0, d).split('"').length % 2 === 0) return a
        return `:"${b}"${c}`
    })
    return formatStr
}

/**
 * 加法
 * @param arg1
 * @param arg2
 * @returns
 */
export const accAdd = (arg1, arg2) => {
    var r1, r2, m
    try { r1 = arg1.toString().split('.')[1].length } catch (e) { r1 = 0 };
    try { r2 = arg2.toString().split('.')[1].length } catch (e) { r2 = 0 };
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
}

/**
* 减法
* @param arg1
* @param arg2
* @returns
*/
export const accSubtr = (arg1, arg2) => {
    var r1, r2, m, n
    try { r1 = arg1.toString().split('.')[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split('.')[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    // 动态控制精度长度
    n = (r1 >= r2) ? r1 : r2
    return ((arg1 * m - arg2 * m) / m).toFixed(n)
}

/***
* 乘法，获取精确乘法的结果值
* @param arg1
* @param arg2
* @returns
*/
export const accMul = (arg1, arg2) => {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString()
    try { m += s1.split('.')[1].length } catch (e) { };
    try { m += s2.split('.')[1].length } catch (e) { };
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}

/***
* 除法，获取精确乘法的结果值
* @param arg1
* @param arg2
* @returns
*/
export const accDivCoupon = (arg1, arg2) => {
    var t1 = 0, t2 = 0
    let r1 = 0, r2 = 0
    try { t1 = arg1.toString().split('.')[1].length } catch (e) { }
    try { t2 = arg2.toString().split('.')[1].length } catch (e) { }
    r1 = Number(arg1.toString().replace('.', ''))
    r2 = Number(arg2.toString().replace('.', ''))
    return (r1 / r2) * Math.pow(10, t2 - t1)
}


/**
*  货币转为千分位格式
* @param arg
* @returns
*/
export const currencyThousandth = (arg) => {
    var prefix = ''
    if (arg * 1 < 0) {
        prefix = '-'
        arg = arg * (-1)
    }
    arg = arg + ''
    if (/[^0-9\.]/.test(arg)) {
        return ''
    }
    arg = arg.replace(/^(\d*)$/, '$1.')
    arg = (arg + '00').replace(/(\d*\.\d\d)\d*/, '$1')
    arg = arg.replace('.', ',')
    var re = /(\d)(\d{3},)/
    while (re.test(arg)) {
        arg = arg.replace(re, '$1,$2')
    }
    arg = arg.replace(/,(\d\d)$/, '.$1')
    return prefix + arg.replace(/^\./, '0.')
}


/**
 *  额度以10万为单位，向上取整
 */
export const lakhRoundUp = (arg) => {
    return Math.ceil(arg / 100000) * 100000
}

/**
*  额度以1万为单位，向上取整
*/
export const tenThousandRoundUp = (arg) => {
    return Math.ceil(arg / 10000) * 10000
}

/**
 * 格式化金额
 * number：要格式化的数字number_format
 * decimals：保留几位小数
 * dec_point：小数点符号
 * thousands_sep：千分位符号
 * roundtag:舍入参数，默认 "ceil" 向上取,"floor"向下取,"round" 四舍五入
 */
export const numberFormat = (number, decimals, decPoint, thousandsSep, roundtag) => {
    number = (number + '').replace(/[^0-9+-Ee.]/g, '')
    roundtag = roundtag || 'ceil' // "ceil","floor","round"
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep,
        dec = (typeof decPoint === 'undefined') ? '.' : decPoint,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec)
            console.log()
            return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k
        }
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
    var re = /(-?\d+)(\d{3})/
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, '$1' + sep + '$2')
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || ''
        s[1] += new Array(prec - s[1].length + 1).join('0')
    }
    return s.join(dec)
}

// 保留五条历史记录
export const historyRecord = (currentArr, newVal) => {
    if(currentArr.indexOf(newVal) == -1) {
        currentArr.push(newVal);
        if(currentArr.length>5) {
            currentArr.shift();
        }
    }else {
        let index = currentArr.findIndex(el=>el == newVal);
        currentArr.splice(index,1);
        currentArr.push(newVal);
    }
    return currentArr;
}