<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-mobile-phone"></i> 游戏列表
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button
                    type="primary"
                    icon="el-icon-circle-plus-outline"
                    @click="handleEdit(-1,{},1)"
                >添加游戏</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <el-table-column prop="game_name" label="游戏名"></el-table-column>
                <el-table-column prop="game_details" label="详情"></el-table-column>
                <el-table-column prop="download_url" label="下载链接"></el-table-column>
                <el-table-column label="头图" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.image_url"
                            :preview-src-list="[scope.row.image_url]"
                        ></el-image>
                    </template>
                </el-table-column>
                <!-- <el-table-column label="轮播图" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.images_urls"
                            :preview-src-list="[scope.row.images_urls[0]]"
                        ></el-image>
                    </template>
                </el-table-column> -->
                <el-table-column prop="time" label="创建时间"></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row,0)"
                        >编辑</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>
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
        <!-- 新增 -->
        <el-dialog title="添加游戏" :visible.sync="addeditVisible">
            <el-form
                ref="form"
                :model="temp1"
                label-position="left"
                label-width="70px"
                style="width: 100%; height: 50vh;overflow-y: scroll;"
            >
                <el-form-item label="游戏名" prop="game_name">
                    <el-input style="width:80%" v-model="temp1.game_name" clearable />
                </el-form-item>
                <el-form-item label="游戏详情" prop="game_details">
                    <el-input style="width:80%" v-model="temp1.game_details" clearable />
                </el-form-item>
                <el-form-item label="下载链接" prop="download_url">
                    <el-input style="width:80%" v-model="temp1.download_url" clearable />
                </el-form-item>
                <el-form-item label="头图" prop="image_url">
                    <el-upload
                        class="avatar-uploader"
                        action="http://tesadmin.hniux.cn/api/game/uploadfile"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                    >
                        <img v-if="temp1.image_url" :src="temp1.image_url" class="avatar" />
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="游戏轮播图" prop="images_urls">
                    <el-upload
                        action="http://tesadmin.hniux.cn/api/game/uploadfile"
                        list-type="picture-card"
                        :on-success="handlePictureCardPreview"
                        :on-remove="handleRemove"
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="temp1.images_urls"
                    >
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="temp1.images_urls" alt />
                    </el-dialog>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addeditVisible = false">取消</el-button>
                <el-button :loading="btnLoading" type="primary" @click="saveEdit">保存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { youxilist, addyouxi, delyouxi, saveyouxi, detailyouxi } from '../../api/index';
export default {
    name: 'appList',
    data() {
        return {
            tableData: [],
            query: {
                address: '',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            pageTotal: 0,
            temp1: {
                id: 0,
                groupId: '',
                game_name: '',
                game_details: '',
                realName: '',
                status: 1,
                image_url: '',
                rules: '3',
                download_url: '',
                images_urls: []
            },
            addeditVisible: false,
            btnLoading: false,
            idx: -1,
            dialogVisible: false,
            page: 1
        };
    },
    mounted() {
        youxilist({ token: localStorage.getItem('token') }).then((res) => {
            console.log(res.data.data.data)
            this.tableData = res.data.data.data;
            this.pageTotal = res.data.data.num;
        });
    },
    methods: {
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 张图片，本次选择了 ${files.length} 张图片`);
        },
        handleRemove(file, fileList) {
            this.temp1.images_urls.map((v, i) => {
                if (v.uid == file.uid) {
                    this.temp1.images_urls.splice(i, 1);
                }
            });
        },
        handlePictureCardPreview(res, file) {
            if (this.temp1.images_urls.length <= 3) {
                this.temp1.images_urls.push({ url: file.response.data });
            }
        },
        // 删除操作
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    delyouxi({ id: row.id }).then((res) => {
                        if (res.data.code == 1) {
                            this.$message.success('删除成功');
                            youxilist({ token: localStorage.getItem('token') }).then((res) => {

                                this.tableData = res.data.data.data;
                                this.pageTotal = res.data.data.num;
                            });
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    });
                })
                .catch(() => {});
        },

        beforeAvatarUpload(file) {
            console.log(file, '3333');
        },
        handleAvatarSuccess(res, file) {
            this.temp1.image_url = file.response.data;
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            youxilist({ token: localStorage.getItem('token'), page: val }).then((res) => {
             
                this.tableData = res.data.data.data;
                this.pageTotal = res.data.data.num;
            });
        },
        delAllSelection() {
            const length = this.multipleSelection.length;
            let str = '';
            this.delList = this.delList.concat(this.multipleSelection);
            for (let i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + ' ';
            }
            this.$message.error(`删除了${str}`);
            this.multipleSelection = [];
        },
        // 编辑操作
        handleEdit(index, row, type) {
         
            if (type == 0) {
                this.temp1 = {
                    id: 0,
                    groupId: '',
                    game_name: '',
                    game_details: '',
                    realName: '',
                    status: 1,
                    image_url: '',
                    rules: '',
                    download_url: '',
                    images_urls: []
                };
                detailyouxi({ id: row.id }).then((res) => {
                    this.temp1 = res.data.data;
                });
                this.idx = index;
                this.addeditVisible = true;
            } else {
                this.idx = -1;
                this.form = {};
                this.temp1 = {
                    id: 0,
                    groupId: '',
                    game_name: '',
                    game_details: '',
                    realName: '',
                    status: 1,
                    image_url: '',
                    rules: '',
                    download_url: '',
                    images_urls: []
                };

                this.addeditVisible = true;
            }
        },
        // 保存编辑
        saveEdit() {
            if (this.idx == -1) {
                var obj = {
                    game_name: this.temp1.game_name,
                    image_url: this.temp1.image_url,
                    game_details: this.temp1.game_details,
                    download_url: this.temp1.download_url,
                    images_urls: this.temp1.images_urls
                };
                if (!this.temp1.game_name || !this.temp1.game_details || !this.temp1.image_url || !this.temp1.download_url || this.temp1.images_urls.length==0) {
                    this.$message.warning('内容不能为空');
                    this.addeditVisible = true;
                    return;
                } else {
                    this.addeditVisible = false;
                }
                addyouxi(obj).then((res) => {
                    if (res.data.code == 1) {
                        this.$message.success('添加成功');
                        youxilist({ token: localStorage.getItem('token') }).then((res) => {
                            this.tableData = res.data.data.data;
                            this.pageTotal = res.data.data.num;
                        });
                    }
                });
            } else {
                var obj = {
                    game_name: this.temp1.game_name,
                    image_url: this.temp1.image_url,
                    game_details: this.temp1.game_details,
                    download_url: this.temp1.download_url,
                    images_urls: this.temp1.images_urls,
                    id: this.temp1.id
                };
                saveyouxi(obj).then((res) => {
                    if (res.data.code == 1) {
                        this.addeditVisible = false;
                        this.$message.success(`修改成功`);
                        youxilist({ token: localStorage.getItem('token') }).then((res) => {
                            this.tableData = res.data.data.data;
                            this.pageTotal = res.data.data.num;
                        });
                    }
                });
            }
        }
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}

.avatar-uploader /deep/ .el-upload {
    width: 180px;
    height: 180px;
    line-height: 100px;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 180px;
    height: 180px;
    line-height: 180px;
    text-align: center;
}

.avatar {
    width: 180px;
    height: 180px;
    display: block;
}
</style>