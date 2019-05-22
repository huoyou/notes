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
            this.text1 = '集团应收账款构成分析(按月度)';
        } else if (type == 2) {
            this.xdata1_1 = arr;
            this.text1_1 = '逾期金额对比分析(按月度)';
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
            this.text1 = '集团应收账款构成分析(按季度)';
        } else if (type == 2) {
            this.xdata1_1 = arr;
            this.text1_1 = '逾期金额对比分析(按季度)';
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
            this.text1 = '集团应收账款构成分析(按年度)';
        } else if (type == 2) {
            this.xdata1_1 = arr;
            this.text1_1 = '逾期金额对比分析(按年度)';
        }
    } else if (index == 3) {
        if (type == 1) {
            this.xdata1 = ['第一星期', '第二星期', '第三星期', '第四星期'];
            this.text1 = '集团应收账款构成分析(按星期)';
        } else if (type == 2) {
            this.xdata1_1 = ['第一星期', '第二星期', '第三星期', '第四星期'];
            this.text1_1 = '逾期金额对比分析(按星期)';
        }
    }
};