<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-pie-chart"></i> 游戏数据
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <!-- <div class="schart-box">
                <div class="content-title">柱状图</div>
                <schart class="schart" canvasId="bar" :options="options1"></schart>
            </div>
            <div class="schart-box">
                <div class="content-title">折线图</div>
                <schart class="schart" canvasId="line" :options="options2"></schart>
            </div>
            <div class="schart-box">
                <div class="content-title">饼状图</div>
                <schart class="schart" canvasId="pie" :options="options3"></schart>
            </div>
            <div class="schart-box">
                <div class="content-title">环形图</div>
                <schart class="schart" canvasId="ring" :options="options4"></schart>
            </div>
            <div class="schart-box">
                <div class="content-title">线图</div>
                <div class="schart" id="charts1"></div>
            </div>-->
            <div class="handle-box">
                <el-date-picker
                    v-model="value1"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd"
                ></el-date-picker>
                <el-button
                    type="primary"
                    style="margin-left:20px"
                    icon="el-icon-search"
                    @click="handleSearch"
                >搜索</el-button>
                <el-button
                    type="primary"
                    style="margin-left:20px"
                    icon="el-icon-delete"
                    @click="recoverSearch"
                >清空</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <el-table-column prop="date_time" fixed width="90" label="日期"></el-table-column>
                <el-table-column prop="active_user" label="活跃用户"></el-table-column>
                <el-table-column prop="add_user" label="新增用户"></el-table-column>
                <el-table-column prop="add_time" label="新增时长"></el-table-column>
                <el-table-column prop="sum_add" label="累计新增"></el-table-column>
                <el-table-column prop="add_second_stay" label="新增次留">
                    <template slot-scope="scope">
                       {{scope.row.add_second_stay}}%
                    </template>
                </el-table-column>
                <el-table-column prop="add_three_stay" label="新增三留">
                    <template slot-scope="scope">
                       {{scope.row.add_three_stay}}%
                    </template>
                </el-table-column>
                <el-table-column prop="add_seven_stay" label="新增七留">
                    <template slot-scope="scope">
                       {{scope.row.add_seven_stay}}%
                    </template>
                </el-table-column>
                <el-table-column prop="add_thirty_stay" width="90" label="新增三十留">
                    <template slot-scope="scope">
                       {{scope.row.add_thirty_stay}}%
                    </template>
                </el-table-column>
                <el-table-column prop="share_add" label="分享引新"></el-table-column>
                <el-table-column prop="active_second_stay" label="活跃次留">
                    <template slot-scope="scope">
                       {{scope.row.active_second_stay}}%
                    </template>
                </el-table-column>
                <el-table-column prop="active_three_stay" label="活跃三留">
                    <template slot-scope="scope">
                       {{scope.row.active_three_stay}}%
                    </template>
                </el-table-column>
                <el-table-column prop="active_seven_stay" label="活跃七留">
                    <template slot-scope="scope">
                       {{scope.row.active_seven_stay}}%
                    </template>
                </el-table-column>
                <el-table-column prop="active_thirty_stay" width="90" label="活跃三十留">
                    <template slot-scope="scope">
                       {{scope.row.active_thirty_stay}}%
                    </template>
                </el-table-column>
                <el-table-column prop="income" label="收入"></el-table-column>
                <el-table-column prop="arpu" label="用户平均收入"></el-table-column>
                <el-table-column prop="arppu" label="每个用户平均付费"></el-table-column>
                <el-table-column prop="pay_amount" label="付费人数"></el-table-column>
                <el-table-column prop="pay_rate" label="付费率">
                    <template slot-scope="scope">
                       {{scope.row.pay_rate}}%
                    </template>
                </el-table-column>
                <el-table-column width="90" prop="add_pay_rate" label="新增付费率">
                    <template slot-scope="scope">
                       {{scope.row.add_pay_rate}}%
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page="query.pageIndex"
                    :page-size="query.pageSize"
                    :total="pageTotal"
                    @current-change="handlePageChange"
                ></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import Schart from 'vue-schart';
import 'echarts/lib/chart/line';
import { youxilistData } from '../../api/index';
export default {
    name: 'basecharts',
    components: {
        Schart
    },
    data() {
        return {
            value1: [],
            tableData: [],
            query: {
                address: '',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            pageTotal: 0,
            options1: {
                type: 'bar',
                title: {
                    text: '最近一周各品类销售图'
                },
                bgColor: '#fbfbfb',
                labels: ['周一', '周二', '周三', '周四', '周五'],
                datasets: [
                    {
                        label: '家电',
                        fillColor: 'rgba(241, 49, 74, 0.5)',
                        data: [234, 278, 270, 190, 230]
                    },
                    {
                        label: '百货',
                        data: [164, 178, 190, 135, 160]
                    },
                    {
                        label: '食品',
                        data: [144, 198, 150, 235, 120]
                    }
                ]
            },
            options2: {
                type: 'line',
                title: {
                    text: '最近几个月各品类销售趋势图'
                },
                bgColor: '#fbfbfb',
                labels: ['6月', '7月', '8月', '9月', '10月'],
                datasets: [
                    {
                        label: '家电',
                        data: [234, 278, 270, 190, 230]
                    },
                    {
                        label: '百货',
                        data: [164, 178, 150, 135, 160]
                    },
                    {
                        label: '食品',
                        data: [114, 138, 200, 235, 190]
                    }
                ]
            },
            options3: {
                type: 'pie',
                title: {
                    text: '服装品类销售饼状图'
                },
                legend: {
                    position: 'left'
                },
                bgColor: '#fbfbfb',
                labels: ['T恤', '牛仔裤', '连衣裙', '毛衣', '七分裤', '短裙', '羽绒服'],
                datasets: [
                    {
                        data: [334, 278, 190, 235, 260, 200, 141]
                    }
                ]
            },
            options4: {
                type: 'ring',
                title: {
                    text: '环形三等分'
                },
                showValue: false,
                legend: {
                    position: 'bottom',
                    bottom: 40
                },
                bgColor: '#fbfbfb',
                labels: ['vue', 'react', 'angular'],
                datasets: [
                    {
                        data: [500, 500, 500]
                    }
                ]
            },
            option5: {
                title: {
                    text: '折线图堆叠'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '邮件营销',
                        type: 'line',
                        data: [0, 132, 101, 134, 90, 230, 210],
                        smooth: true
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        data: [220, 182, 191, 234, 290, 330, 310],
                        smooth: true
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        data: [150, 232, 201, 1, 190, 330, 410],
                        smooth: true
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        data: [320, 332, 301, 334, 390, 330, 320],
                        smooth: true
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        smooth: true
                    }
                ]
            }
        };
    },
    mounted() {
        youxilistData().then((res) => {
            this.tableData = res.data.data.data;
            this.pageTotal = res.data.data.num;
        });
        // this.drawLine();
    },
    methods: {
        recoverSearch() {
            this.value1 = [];
            youxilistData({ token: localStorage.getItem('token') }).then((res) => {
                this.tableData = res.data.data.data;
                this.pageTotal = res.data.data.num;
            });
        },
        // 触发搜索按钮
        handleSearch() {
            this.$set(this.query, 'pageIndex', 1);
            var obj = {
                start_time: this.value1[0],
                end_time: this.value1[1],
                page: this.query.pageIndex
            };
            youxilistData(obj).then((res) => {
                this.tableData = res.data.data.data;
                this.pageTotal = res.data.data.num;
            });
        },
        // drawLine() {
        //     this.charts1 = this.$echarts.init(document.getElementById('charts1'));
        //     this.charts1.setOption(this.option5);
        // }
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            var obj = {
                start_time: this.value1[0] || '',
                end_time: this.value1[1] || '',
                page: val,
                token: localStorage.getItem('token')
            };
            // this.getData();
            youxilistData(obj).then((res) => {
                this.tableData = res.data.data.data;
                this.pageTotal = res.data.data.num;
            });
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}
.schart-box {
    display: inline-block;
    margin: 20px;
}
.schart {
    width: 800px;
    height: 400px;
}
.content-title {
    clear: both;
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}
</style>