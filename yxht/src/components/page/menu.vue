<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-document-add"></i> 添加栏目
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button
                    type="primary"
                    icon="el-icon-circle-plus-outline"
                    class="handle-del mr10"
                    @click="handleEdit()"
                >添加栏目</el-button>
            </div>
            <el-table
                :data="tableData"
                style="width: 100%;margin-bottom: 20px;"
                row-key="id"
                border
                default-expand-all
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
            >
                <el-table-column prop="title" label="类目" width="180"></el-table-column>
                <el-table-column prop="icon" label="图标" width="180"></el-table-column>
                <el-table-column prop="index" label="路径">
                    <template slot-scope="scope">/{{scope.row.index}}</template>
                </el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 新增 -->
        <el-dialog title="添加类目" :visible.sync="addeditVisible">
            <el-form
                ref="form"
                :model="temp"
                label-position="left"
                label-width="70px"
                style="width: 100%; height: 50vh;overflow-y: scroll;"
            >
                <el-form-item label="类名名称" prop="name">
                    <el-select v-model="temp.fid" placeholder="请选择">
                        <el-option
                            v-for="item in tableData"
                            :key="item.title"
                            :label="item.title"
                            :value="item.id"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="类名名称" prop="title">
                    <el-input style="width:80%" v-model="temp.title" clearable />
                </el-form-item>
                <el-form-item label="图标" prop="icon">
                    <el-input style="width:80%" v-model="temp.icon" clearable />
                </el-form-item>
                <el-form-item label="路径" prop="router">
                    <el-input style="width:80%" v-model="temp.router" clearable />
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
import { addmenu, menuList, delmenu } from '../../api/index';
export default {
    data() {
        return {
            tableData: [],
            pageTotal: 0,
            query: {
                address: '',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            addeditVisible: false,
            btnLoading: false,
            temp: {
                fid: '',
                title: '',
                icon: '',
                router: ''
            }
        };
    },
    inject:['reload'],
    mounted() {
        menuList({ token: localStorage.getItem('token') }).then((res) => {
            this.tableData = res.data.data;
        });
    },
    methods: {
        saveEdit() {
            if (!this.temp.title || !this.temp.icon || !this.temp.router || !this.temp.fid) {
                this.$message.warning('内容不能为空');
                this.addeditVisible = true;
                return;
            } else {
                this.addeditVisible = false;
            }
            addmenu(this.temp).then((res) => {
                if (res.data.code == 1) {
                    this.$message.success('添加成功');
                    menuList({ token: localStorage.getItem('token') }).then((res) => {
                        this.tableData = res.data.data;
                    });
                    // 刷新页面
                    this.reload()
                } else {
                    this.$message.error(res.data.msg);
                }
            });
        },
        // 删除操作
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    delmenu({id:row.id}).then((res) => {
                        if (res.data.code == 1) {
                            this.$message.success('删除成功');
                            menuList({ token: localStorage.getItem('token') }).then((res) => {
                                this.tableData = res.data.data;
                            });
                            this.reload()
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    });
                })
                .catch(() => {});
        },
        handleEdit() {
            this.addeditVisible = true;
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            userlist({ token: localStorage.getItem('token'), page: val }).then((res) => {
                this.tableData = res.data.data.data;
                this.pageTotal = res.data.data.num;
            });
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
</style>