$(function () {
    var viewManagement = new ViewManagement();
    viewManagement.init();
});

var ViewManagement = function () {
    var _this = this,
        timer,
        $six = $('#six'),
        $sortBar = $('.sorting-type');
    var elemeModel = {
        storeInformarion: ko.observableArray([
            {
                title: '熊猫餐馆（主题自助）', count: '223', takeout: '10', activity: [
                  { name: '首', information: '(不与其他活动同享)新用户下单立减10元(手机客户端专享)' },
                  { name: '付', information: '可使用支付宝、微信、手机QQ在线支付' },
                  { name: '减', information: '在线支付满15元立减5元(手机客户端专享)' },
                ], src: 'images/padel.jpg', costTime: '29分钟',
                explaination: '订外卖上饿了么。'
            },
            {
                title: '极客便当', count: '0', takeout: '0', activity: [
                    { name: '首', information: '(不与其他活动同享)新用户下单立减10元(手机客户端专享)' },
                    { name: '减', information: '在线支付满15元立减5元(手机客户端专享)' },
                ], src: 'images/lemp.jpg', costTime: '10分钟',
                explaination: '订外卖上饿了么。'
            },
            {
                title: '山城海外（烤鱼）', count: '223', takeout: '50', activity: [
                  { name: '首', information: '(不与其他活动同享)新用户下单立减10元(手机客户端专享)' },
                  { name: '付', information: '可使用支付宝、微信、手机QQ在线支付' },
                  { name: '减', information: '在线支付满15元立减5元(手机客户端专享)' },
                ], src: 'images/beauty.jpg', costTime: '29分钟',
                explaination: '吃烤鱼上山城海外。'
            },
            {
                title: '丸三情（烤肉）', count: '5414', takeout: '30', activity: [
                    { name: '首', information: '(不与其他活动同享)新用户下单立减10元(手机客户端专享)' },
                    { name: '付', information: '可使用支付宝、微信、手机QQ在线支付' },
                    { name: '减', information: '在线支付满15元立减5元(手机客户端专享)' },
                    { name: '减', information: '在线支付满15元立减5元(手机客户端专享)' },
                ], src: 'images/wan.jpg', costTime: '10分钟',
                explaination: '"烤肉"选料严格，肉嫩味香，自烤自食，再佐以美酒，独具风味。烤肉历史悠久，但值得一提的事，烤肉不对等于原始的刀耕火种。'
            },
            {
                title: '吴记铁板炒饭', count: '102', takeout: '10', activity: [
                    { name: '首', information: '(不与其他活动同享)新用户下单立减10元(手机客户端专享)' },
                    { name: '付', information: '可使用支付宝、微信、手机QQ在线支付' },
                    { name: '减', information: '在线支付满15元立减5元(手机客户端专享)' },
                    { name: '专', information: '...(手机客户端专享)' },
                ], src: 'images/son.jpg', costTime: '10分钟',
                explaination: '订外卖上饿了么。'
            },
            {
                title: '熊猫餐馆（主题自助）', count: '223', takeout: '10', activity: [
                  { name: '首', information: '(不与其他活动同享)新用户下单立减10元(手机客户端专享)' },
                  { name: '付', information: '可使用支付宝、微信、手机QQ在线支付' },
                  { name: '减', information: '在线支付满15元立减5元(手机客户端专享)' },
                ], src: 'images/padel.jpg', costTime: '29分钟',
                explaination: '订外卖上饿了么。'
            },
            {
                title: '极客便当', count: '0', takeout: '0', activity: [
                    { name: '首', information: '(不与其他活动同享)新用户下单立减10元(手机客户端专享)' },
                    { name: '减', information: '在线支付满15元立减5元(手机客户端专享)' },
                ], src: 'images/lemp.jpg', costTime: '10分钟',
                explaination: '本餐厅只配送饿了么订单，店主大力支持饿了么！是吃货的你成就了我们外卖行业的龙头地位，饿了么感谢您一路相伴！我们将用心为您提供更好的服务！'
            },
            {
                title: '山城海外（烤鱼）', count: '223', takeout: '50', activity: [
                  { name: '首', information: '(不与其他活动同享)新用户下单立减10元(手机客户端专享)' },
                  { name: '付', information: '可使用支付宝、微信、手机QQ在线支付' },
                  { name: '减', information: '在线支付满15元立减5元(手机客户端专享)' },
                ], src: 'images/beauty.jpg', costTime: '29分钟',
                explaination: '吃烤鱼上山城海外。'
            },
            {
                title: '丸三情（烤肉）', count: '5414', takeout: '30', activity: [
                    { name: '首', information: '(不与其他活动同享)新用户下单立减10元(手机客户端专享)' },
                    { name: '付', information: '可使用支付宝、微信、手机QQ在线支付' },
                    { name: '减', information: '在线支付满15元立减5元(手机客户端专享)' },
                    { name: '减', information: '在线支付满15元立减5元(手机客户端专享)' },
                ], src: 'images/wan.jpg', costTime: '10分钟',
                explaination: '"烤肉"选料严格，肉嫩味香，自烤自食，再佐以美酒，独具风味。烤肉历史悠久，但值得一提的事，烤肉不对等于原始的刀耕火种。'
            },
            {
                title: '吴记铁板炒饭', count: '102', takeout: '10', activity: [
                    { name: '首', information: '(不与其他活动同享)新用户下单立减10元(手机客户端专享)' },
                    { name: '付', information: '可使用支付宝、微信、手机QQ在线支付' },
                    { name: '减', information: '在线支付满15元立减5元(手机客户端专享)' },
                    { name: '专', information: '...(手机客户端专享)' },
                ], src: 'images/son.jpg', costTime: '10分钟',
                explaination: '订外卖上饿了么。'
            },
        ]),

        imgSrc: ko.observableArray([
            { src: 'images/image1.png', visible: ko.observable(true) },
            { src: 'images/image2.jpg', visible: ko.observable(false) }
        ]),

        myOrderVisible: ko.observable(false),
        myInformationVisible: ko.observable(false),
        myHistoryVisible: ko.observable(false),
        serviceOnlineVisible: ko.observable(false),

        sorting: ko.observable({ array: ko.observableArray(['距离最近', '配送速度', '起送金额']), selected: ko.observable('其他排序') }),
        changeSorting: function (item) {
            elemeModel.sorting().selected(item);
            $('#showSelectedSorting').addClass('colorBlue');
        },

        takenout: ko.observable({ array: ko.observableArray(['不限', '15元以下', '20元以下', '30元以下', '40元以下', ]), selected: ko.observable('不限') }),
        changeTakenout: function (item) {
            item = item.substring(0, 3)
            elemeModel.takenout().selected(item);
            $('#showSelectedPrice').addClass('colorBlue');
        },

        currentIndex: ko.observable(),

        changeImage: function (item) {
            for (var i = elemeModel.imgSrc().length - 1; i >= 0; i--) {
                elemeModel.imgSrc()[i].visible(false);
            }
            elemeModel.imgSrc()[item - 1].visible(true);
            elemeModel.currentIndex(item - 1);
            _this.setIntervalStart(elemeModel.currentIndex());
        },
    }

    elemeModel.pageList = ko.dependentObservable(function () {
        var list = [];
        for (var i = elemeModel.imgSrc().length; i > 0; i--) {
            list.push(i);
        }
        return list;
    });

    _this.init = function () {
        _this.inEvent();
        _this.changeImage
        _this.applyBinding();
        _this.setIntervalStart(0);
        _this.changePause();
        _this.somethingToShow();
    }
    _this.somethingToShow = function () {
        document.body.onmousewheel = function (event) {
            if (window.scrollY > 200) {
                $six.css({ 'display': 'block' });
                $sortBar.addClass('fixed-bar');
                $('#search-input input').blur();

            } else {
                $six.css({ 'display': 'none' });
                $sortBar.removeClass('fixed-bar');
                $('#search-input input').blur();
            }
        };
    }

    _this.backToTop = function () {

    }

    _this.applyBinding = function () {
        ko.applyBindings(elemeModel, $('#container')[0]);
    }

    _this.inEvent = function () {
        var bd = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'),
            $container = $('.container-right');

        _this.showAndHide($('#one'), $('#myOrder'));
        _this.showAndHide($('#two'), $('#myInformation'));
        _this.showAndHide($('#three'), $('#myHistory'));
        _this.showAndHide($('#five'), $('#serviceOnline'));
        _this.showAndHide($('#six'), $('#backTop'));

        $six.click(function () {
            //console.log('click');
            bd.animate({ scrollTop: 0 }, 250);
            $six.css({ 'display': 'none' });
            $sortBar.removeClass('fixed-bar');
            $('#search-input input').blur();
        });

        $('.eleme-dropdown').mouseenter(function () {
            $(this).children('.flag').removeClass('icon-chevron-down');
            $(this).children('.flag').addClass('icon-chevron-up');
        }).mouseleave(function () {
            $(this).children('.flag').addClass('icon-chevron-up');
            $(this).children('.flag').addClass('icon-chevron-down');
        });

        $('#menu-cart, #two, #three').click(function () {
            if ($container.hasClass('margin-Right')) {
                console.log('yes');
                $container.removeClass('margin-Right');
                $container.animate({ right:'260px' });
            } else {
                console.log('no');
                $container.addClass('margin-Right');
                $container.animate({ right: '0' });
            }
        });

        $('.icon-double-angle-right').click(function () {
            $container.animate({ right: '0' });
        });
    }

    _this.showAndHide = function ($element, $done) {
        $element.mouseenter(function () {
            $done.css('display', 'block');
        }).mouseleave(function () {
            $done.css({ 'display': 'none' });
        });
    }

    _this.changePause = function () {
        $('.eleme-imgBox').mouseenter(function () {
            clearInterval(timer);
        }).mouseleave(function () {
            _this.setIntervalStart(elemeModel.currentIndex());
        });
    }

    _this.setIntervalStart = function (index) {
        elemeModel.currentIndex(index);
        clearInterval(timer);
        function changeImage() {
            elemeModel.imgSrc()[elemeModel.currentIndex()].visible(false);
            elemeModel.currentIndex(elemeModel.currentIndex() + 1);
            if (elemeModel.currentIndex() > elemeModel.imgSrc().length - 1) {
                elemeModel.currentIndex(0);
            }
            elemeModel.imgSrc()[elemeModel.currentIndex()].visible(true);
        }
        timer = setInterval(changeImage, 2000);
    }

}