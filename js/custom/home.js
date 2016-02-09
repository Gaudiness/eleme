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
                title: '��è�͹ݣ�����������', count: '223', takeout: '10', activity: [
                  { name: '��', information: '(���������ͬ��)���û��µ�����10Ԫ(�ֻ��ͻ���ר��)' },
                  { name: '��', information: '��ʹ��֧������΢�š��ֻ�QQ����֧��' },
                  { name: '��', information: '����֧����15Ԫ����5Ԫ(�ֻ��ͻ���ר��)' },
                ], src: 'images/padel.jpg', costTime: '29����',
                explaination: '�������϶���ô��'
            },
            {
                title: '���ͱ㵱', count: '0', takeout: '0', activity: [
                    { name: '��', information: '(���������ͬ��)���û��µ�����10Ԫ(�ֻ��ͻ���ר��)' },
                    { name: '��', information: '����֧����15Ԫ����5Ԫ(�ֻ��ͻ���ר��)' },
                ], src: 'images/lemp.jpg', costTime: '10����',
                explaination: '�������϶���ô��'
            },
            {
                title: 'ɽ�Ǻ��⣨���㣩', count: '223', takeout: '50', activity: [
                  { name: '��', information: '(���������ͬ��)���û��µ�����10Ԫ(�ֻ��ͻ���ר��)' },
                  { name: '��', information: '��ʹ��֧������΢�š��ֻ�QQ����֧��' },
                  { name: '��', information: '����֧����15Ԫ����5Ԫ(�ֻ��ͻ���ר��)' },
                ], src: 'images/beauty.jpg', costTime: '29����',
                explaination: '�Կ�����ɽ�Ǻ��⡣'
            },
            {
                title: '�����飨���⣩', count: '5414', takeout: '30', activity: [
                    { name: '��', information: '(���������ͬ��)���û��µ�����10Ԫ(�ֻ��ͻ���ר��)' },
                    { name: '��', information: '��ʹ��֧������΢�š��ֻ�QQ����֧��' },
                    { name: '��', information: '����֧����15Ԫ����5Ԫ(�ֻ��ͻ���ר��)' },
                    { name: '��', information: '����֧����15Ԫ����5Ԫ(�ֻ��ͻ���ר��)' },
                ], src: 'images/wan.jpg', costTime: '10����',
                explaination: '"����"ѡ���ϸ�����ζ�㣬�Կ���ʳ�����������ƣ����߷�ζ��������ʷ�ƾã���ֵ��һ����£����ⲻ�Ե���ԭʼ�ĵ������֡�'
            },
            {
                title: '������峴��', count: '102', takeout: '10', activity: [
                    { name: '��', information: '(���������ͬ��)���û��µ�����10Ԫ(�ֻ��ͻ���ר��)' },
                    { name: '��', information: '��ʹ��֧������΢�š��ֻ�QQ����֧��' },
                    { name: '��', information: '����֧����15Ԫ����5Ԫ(�ֻ��ͻ���ר��)' },
                    { name: 'ר', information: '...(�ֻ��ͻ���ר��)' },
                ], src: 'images/son.jpg', costTime: '10����',
                explaination: '�������϶���ô��'
            },
            {
                title: '��è�͹ݣ�����������', count: '223', takeout: '10', activity: [
                  { name: '��', information: '(���������ͬ��)���û��µ�����10Ԫ(�ֻ��ͻ���ר��)' },
                  { name: '��', information: '��ʹ��֧������΢�š��ֻ�QQ����֧��' },
                  { name: '��', information: '����֧����15Ԫ����5Ԫ(�ֻ��ͻ���ר��)' },
                ], src: 'images/padel.jpg', costTime: '29����',
                explaination: '�������϶���ô��'
            },
            {
                title: '���ͱ㵱', count: '0', takeout: '0', activity: [
                    { name: '��', information: '(���������ͬ��)���û��µ�����10Ԫ(�ֻ��ͻ���ר��)' },
                    { name: '��', information: '����֧����15Ԫ����5Ԫ(�ֻ��ͻ���ר��)' },
                ], src: 'images/lemp.jpg', costTime: '10����',
                explaination: '������ֻ���Ͷ���ô��������������֧�ֶ���ô���ǳԻ�����ɾ�������������ҵ����ͷ��λ������ô��л��һ·��飡���ǽ�����Ϊ���ṩ���õķ���'
            },
            {
                title: 'ɽ�Ǻ��⣨���㣩', count: '223', takeout: '50', activity: [
                  { name: '��', information: '(���������ͬ��)���û��µ�����10Ԫ(�ֻ��ͻ���ר��)' },
                  { name: '��', information: '��ʹ��֧������΢�š��ֻ�QQ����֧��' },
                  { name: '��', information: '����֧����15Ԫ����5Ԫ(�ֻ��ͻ���ר��)' },
                ], src: 'images/beauty.jpg', costTime: '29����',
                explaination: '�Կ�����ɽ�Ǻ��⡣'
            },
            {
                title: '�����飨���⣩', count: '5414', takeout: '30', activity: [
                    { name: '��', information: '(���������ͬ��)���û��µ�����10Ԫ(�ֻ��ͻ���ר��)' },
                    { name: '��', information: '��ʹ��֧������΢�š��ֻ�QQ����֧��' },
                    { name: '��', information: '����֧����15Ԫ����5Ԫ(�ֻ��ͻ���ר��)' },
                    { name: '��', information: '����֧����15Ԫ����5Ԫ(�ֻ��ͻ���ר��)' },
                ], src: 'images/wan.jpg', costTime: '10����',
                explaination: '"����"ѡ���ϸ�����ζ�㣬�Կ���ʳ�����������ƣ����߷�ζ��������ʷ�ƾã���ֵ��һ����£����ⲻ�Ե���ԭʼ�ĵ������֡�'
            },
            {
                title: '������峴��', count: '102', takeout: '10', activity: [
                    { name: '��', information: '(���������ͬ��)���û��µ�����10Ԫ(�ֻ��ͻ���ר��)' },
                    { name: '��', information: '��ʹ��֧������΢�š��ֻ�QQ����֧��' },
                    { name: '��', information: '����֧����15Ԫ����5Ԫ(�ֻ��ͻ���ר��)' },
                    { name: 'ר', information: '...(�ֻ��ͻ���ר��)' },
                ], src: 'images/son.jpg', costTime: '10����',
                explaination: '�������϶���ô��'
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

        sorting: ko.observable({ array: ko.observableArray(['�������', '�����ٶ�', '���ͽ��']), selected: ko.observable('��������') }),
        changeSorting: function (item) {
            elemeModel.sorting().selected(item);
            $('#showSelectedSorting').addClass('colorBlue');
        },

        takenout: ko.observable({ array: ko.observableArray(['����', '15Ԫ����', '20Ԫ����', '30Ԫ����', '40Ԫ����', ]), selected: ko.observable('����') }),
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