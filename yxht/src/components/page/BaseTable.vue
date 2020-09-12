<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 用户管理
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button
                    type="primary"
                    icon="el-icon-circle-plus-outline"
                    class="handle-del mr10"
                    @click="handleEdit(-1,{},1)"
                >添加用户</el-button>
                <!-- <el-button
                    type="primary"
                    icon="el-icon-delete"
                    class="handle-del mr10"
                    @click="delAllSelection"
                >批量删除</el-button>-->

                <!-- <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button> -->
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <!-- <el-table-column type="selection" width="55" align="center"></el-table-column> -->
                <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
                <el-table-column prop="username" label="用户名"></el-table-column>
                <el-table-column label="头像" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.img"
                            :preview-src-list="[scope.row.img]"
                        ></el-image>
                    </template>
                </el-table-column>
                <el-table-column label="状态" align="center">
                    <template slot-scope="scope">
                        <el-tag
                            :type="scope.row.status_str==='正常'?'success':(scope.row.state==='禁用'?'danger':'')"
                        >{{scope.row.status_str}}</el-tag>
                    </template>
                    <!-- <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch> -->
                </el-table-column>

                <el-table-column prop="time" width="180" label="注册时间"></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row,0)"
                        >编辑</el-button>
                        <!-- <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>-->
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
        <el-dialog title="添加用户" :visible.sync="addeditVisible">
            <el-form
                ref="form"
                :model="temp"
                label-position="left"
                label-width="70px"
                style="width: 100%; height: 50vh;overflow-y: scroll;"
            >
                <!-- <el-form-item label="角色" prop="groupId">
                    <el-select v-model="temp.groupId" class="filter-item" placeholder="请选择">
                        <el-option
                            v-for="item in roles"
                            :key="item.id"
                            :label="item.title"
                            :value="item.id"
                        />
                </el-select>-->
                <!-- </el-form-item> -->
                <el-form-item label="账号" prop="userName">
                    <el-input style="width:80%" v-model="temp.username" clearable />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input style="width:80%" v-model="temp.password" show-password />
                </el-form-item>
                <el-form-item label="头像" prop="img">
                    <el-upload
                        class="avatar-uploader"
                        action="http://tesadmin.hniux.cn/api/game/uploadfile"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                    >
                        <img v-if="temp.img" :src="temp.img" class="avatar" />
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <!-- <el-form-item label="姓名" prop="username">
                    <el-input style="width:80%" v-model="temp.username" clearable />
                </el-form-item>
                <el-form-item style="width:80%" label="手机" prop="phone">
                    <el-input v-model="temp.phone" clearable />
                </el-form-item>
                <el-form-item style="width:80%" label="邮箱" prop="email">
                    <el-input v-model="temp.email" clearable />
                </el-form-item>-->
                <el-form-item label="状态">
                    <el-radio-group v-model="temp.status">
                        <el-radio :label="1">正常</el-radio>
                        <el-radio :label="0">禁用</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="权限">
                    <el-tree
                        ref="tree"
                        :data="getRulesList"
                        :default-checked-keys="defaultChecked"
                        :props="defaultProps"
                        default-expand-all
                        show-checkbox
                        check-strictly
                        node-key="id"
                        @check="checkHandle"
                    />
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
import { userlist, qbuserlist, adduser, detailsuser, saveuser } from '../../api/index';
import tree from '../../utils/three.js';
export default {
    name: 'basetable',
    data() {
        return {
            btnLoading: false,
            roles: [
                { id: 1, title: '超级管理员', status: 1 },
                { id: 2, title: '普通管理员', status: 1 }
            ],
            getRList: [],
            defaultChecked: [],
            defaultProps: {
                children: 'children',
                label: 'title'
            },
            temp: {
                id: 0,
                groupId: '',
                username: '',
                password: '',
                realName: '',
                status: 1,
                img: '',
                rules: '3'
            },
            query: {
                address: '',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            tableData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            addeditVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1,
            value: true,
            menu_id: [],
            page: 1
        };
    },
    mounted() {
        this.getData();
    },
    computed: {
        getRulesList() {
            return tree.listToTreeMulti(this.getRList);
        }
    },
    methods: {
        checkHandle(data) {
            this.menu_id.push(data.id);
            const halfCheckedKeys = this.$refs.tree.getHalfCheckedKeys().join(',');
            const checkedKeys = this.$refs.tree.getCheckedKeys().join(',');
            if (halfCheckedKeys.length && checkedKeys.length) {
                this.temp.rules = halfCheckedKeys + ',' + checkedKeys;
            } else if (halfCheckedKeys.length && checkedKeys.length === 0) {
                this.temp.rules = halfCheckedKeys;
            } else if (halfCheckedKeys.length === 0 && checkedKeys.length) {
                this.temp.rules = checkedKeys;
            } else {
                this.temp.rules = '';
            }
        },
        handleAvatarSuccess(res, file) {
            this.temp.img = file.response.data;
        },
        beforeAvatarUpload(file) {
            console.log(file, '3333');
        },
        // 获取 easy-mock 的模拟数据
        getData() {
            userlist().then((res) => {
                this.tableData = res.data.data.data;
                this.pageTotal = res.data.data.num;
            });
            qbuserlist({ token: localStorage.getItem('token') }).then((res) => {
                this.getRList = res.data.data;
            });
        },
        // 触发搜索按钮
        handleSearch() {
            this.$set(this.query, 'pageIndex', 1);
            this.getData();
        },
        // 删除操作
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success('删除成功');
                    this.tableData.splice(index, 1);
                })
                .catch(() => {});
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val;
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
                detailsuser({ id: row.id }).then((res) => {
                    this.temp = res.data.data;
                    this.$refs.tree.setCheckedKeys(this.temp.rules.split(','));
                });
                this.idx = index;

                this.addeditVisible = true;
            } else {
                this.idx = -1;
                this.form = {};
                this.temp = {
                    id: 0,
                    groupId: '',
                    username: '',
                    password: '',
                    realName: '',
                    status: 1,
                    img: '',
                    rules: ''
                };
                this.addeditVisible = true;
            }
        },
        // 保存编辑
        saveEdit() {
            if (this.idx == -1) {
                var obj = {
                    username: this.temp.username,
                    password: this.temp.password,
                    menu_ids: this.temp.rules,
                    image_url: this.temp.img,
                    status:this.temp.status
                };
                if (!this.temp.username || !this.temp.password || !this.temp.img) {
                    this.$message.warning('内容不能为空');
                    this.addeditVisible = true;
                    return
                } else {
                    this.addeditVisible = false;
                }
                adduser(obj).then((res) => {
                    
                    if (res.data.code == 1) {
                        this.$message.success('添加成功');
                        userlist().then((res) => {
                           
                            this.tableData = res.data.data.data;
                            this.pageTotal = res.data.data.num;
                        });
                    } else {
                        this.$message.error(res.data.msg);
                    }
                });
            } else {
                var obj = {
                    username: this.temp.username,
                    nickname: this.temp.username,
                    password: this.temp.password,
                    menu_ids: this.temp.rules,
                    id: this.temp.id,
                    status: this.temp.status
                };
                saveuser(obj).then((res) => {
                   
                    if (res.data.code == 1) {
                        this.addeditVisible = false;
                        this.$message.success(`修改成功`);
                        
                        userlist().then((res) => {
                            this.tableData = res.data.data.data;
                            this.pageTotal = res.data.data.num;
                        });
                    } else {
                        this.$message.error(res.data.msg);
                    }
                });
                //
                // // this.$message.success(`修改第 ${this.idx + 1} 行成功`);
                // this.$set(this.tableData, this.idx, this.form);
            }
        },
        // 分页导航
        handlePageChange(val) {
            
            this.$set(this.query, 'pageIndex', val);
            userlist({ token: localStorage.getItem('token'), page: val }).then((res) => {
                console.log(res.data);
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
