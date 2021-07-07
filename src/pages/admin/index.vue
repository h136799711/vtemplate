<template>
    <div
            v-loading.body="pageLoading"
            class="main-content"
    >
        <el-row class="padding-md">
            <el-col
                    :span="6"
                    class="margin-lg-bottom"
            >
                <div
                        class="text-center"
                        style="margin: auto;width: 90px;"
                >
                    <el-button
                            type="default"
                            class="margin-sm-bottom"
                            style="width: 80px;height: 80px;"
                            circle
                    >
                        {{ newUsers }}
                    </el-button>
                    <span>新增用户</span>
                </div>
            </el-col>
            <el-col
                    :span="6"
                    class="margin-lg-bottom"
            >
                <div
                        class="text-center"
                        style="margin: auto;width: 90px;"
                >
                    <el-button
                            type="default"
                            class="margin-sm-bottom"
                            style="width: 80px;height: 80px;"
                            circle
                    >
                        {{ newBooks }}
                    </el-button>
                    <span>新增小说</span>
                </div>
            </el-col>
            <el-col
                    :span="6"
                    class="margin-lg-bottom"
            >
                <div
                        class="text-center"
                        style="margin: auto;width: 90px;"
                >
                    <el-button
                            type="default"
                            class="margin-sm-bottom"
                            style="width: 80px;height: 80px;"
                            circle
                    >
                        {{ newArticle }}
                    </el-button>
                    <span>新增文章</span>
                </div>
            </el-col>
            <el-col
                    :span="6"
                    class="margin-lg-bottom"
            >
                <div
                        class="text-center"
                        style="margin: auto;width: 90px;"
                >
                    <el-button
                            type="default"
                            class="margin-sm-bottom"
                            style="width: 80px;height: 80px;"
                            circle
                    >
                        {{ newVideo }}
                    </el-button>
                    <span>新增视频</span>
                </div>
            </el-col>
            <el-col :span="24" style="height: 240px;">
                    <e-charts :option="options"/>
                    <i
                            v-if="requestSiteUpdateData"
                            class="el-icon-loading "
                            style="font-size: 36px;"
                    />
            </el-col>
            <el-col :span="24" style="height: 240px;">
                    <e-charts :option="video_options"/>
                    <i
                            v-if="requestSiteUpdateData"
                            class="el-icon-loading "
                            style="font-size: 36px;"
                    />
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import staticsApi from '../../api/staticsApi';
    import {use} from "echarts/core";
    import {CanvasRenderer} from "echarts/renderers";
    import {LineChart} from "echarts/charts"
    import {
        TitleComponent,
        TooltipComponent,
        LegendComponent,
        GridComponent,
    } from "echarts/components";

    import ECharts, {THEME_KEY} from 'vue-echarts';
    import {ref, defineComponent} from "vue";

    use([
        CanvasRenderer,
        LineChart,
        TitleComponent,
        TooltipComponent,
        LegendComponent,
        GridComponent
    ]);

    export default defineComponent({
        name: 'AdminIndex',
        // provide: {
        //     [THEME_KEY]: "dark"
        // },
        data() {
            return {
                pageLoading: false,
                requestSiteUpdateData: false,
                siteUpdateData: [],
                newUsers: 0,
                newBooks: 0,
                newArticle: 0,
                newVideo: 0,
                video_options: {
                    title: {
                        text: '视频更新统计'
                    },
                    tooltip: {show: true},
                    xAxis: {
                        axisPointer: {
                            snap: true,
                            label: {
                                show: true,
                                formatter: function (params) {
                                    return params.value
                                }
                            },
                            handle: {
                                show: false
                            }
                        },
                        type: 'category',
                        data: []
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [],
                        type: 'line',
                        areaStyle: {}
                    }, {
                        data: [],
                        type: 'line'
                    }]
                },
                options: {
                    title: {
                        text: '章节更新统计'
                    },
                    tooltip: {show: true},
                    xAxis: {
                        axisPointer: {
                            value: '10-7',
                            snap: true,
                            label: {
                                show: true,
                                formatter: function (params) {
                                    return params.value
                                }
                            },
                            handle: {
                                show: false
                            }
                        },
                        type: 'category',
                        data: []
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [1, 2, 3, 4, 5, 6],
                        type: 'line',
                        areaStyle: {}
                    }]
                }
            }
        },
        computed: {},
        mounted() {
            // 这里获取数据
            this.loadData()
        },
        updated() {
        },
        methods: {
            // 获取数据 必须要要有个loadData方法以供刷新使用
            loadData() {
                // if (this.pageLoading) return;
                let that = this;
                this.requestSiteUpdateData = true;

                staticsApi.query({lc_refresh: false, page_size: 30}, function (data) {
                    console.debug("请求成功", data);
                    that.siteUpdateData = data;
                    that.requestSiteUpdateData = false;
                    that.drawChapters(data);
                    that.drawVideos(data);
                    that.setYesterdayValue(data);
                }, function (err) {
                    console.debug("统计数据请求失败", err);
                    that.requestSiteUpdateData = false
                })
            },
            setYesterdayValue(data) {
                let tempDate = (new Date()).getTime() - 24 * 3600 * 1000
                let yesterday = parseInt((new Date(tempDate).format('yyyyMMdd')))
                for (var k = 0; k < data.length; k++) {
                    if (data[k].a_date === yesterday) {
                        this.newUsers = data[k].new_users
                        this.newBooks = data[k].new_book
                        this.newArticle = data[k].new_articles
                        this.newVideo = data[k].new_videos
                        break
                    }
                }
            },

            drawVideos(data) {
                let showDays = 30;
                let now = (new Date()).getTime() - showDays * 24 * 3600 * 1000;
                for (let j = 0; j < showDays; j++) {
                    this.video_options.xAxis.data.push(new Date(now).format('MM-dd'));
                    now = now + 24 * 3600 * 1000;
                    this.video_options.series[0].data.push(0);
                }

                for (let i = 0; i < data.length; i++) {
                    let tempDate = (new Date()).getTime() - showDays * 24 * 3600 * 1000
                    for (let k = 0; k < showDays; k++) {
                        if (data[i].a_date.toString() === (new Date(tempDate).format('yyyyMMdd'))) {
                            this.video_options.series[0].data[k] = (data[i].new_video_source)
                            break
                        }
                        tempDate += 24 * 3600 * 1000
                    }
                }
            },
            drawChapters(data) {
                let showDays = 30;
                let now = (new Date()).getTime() - showDays * 24 * 3600 * 1000;
                for (let j = 0; j < showDays; j++) {
                    this.options.xAxis.data.push(new Date(now).format('MM-dd'));
                    now = now + 24 * 3600 * 1000;
                    this.options.series[0].data.push(0)
                }

                for (let i = 0; i < data.length; i++) {
                    let tempDate = (new Date()).getTime() - showDays * 24 * 3600 * 1000;
                    for (let k = 0; k < showDays; k++) {
                        if (data[i].a_date.toString() === (new Date(tempDate).format('yyyyMMdd'))) {
                            this.options.series[0].data[k] = data[i].new_chapters;
                            break;
                        }
                        tempDate += 24 * 3600 * 1000
                    }
                }
                console.debug(this.options.series[0])
            }
        }
    });
</script>
