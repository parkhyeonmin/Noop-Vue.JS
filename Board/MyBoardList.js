var MyBoardList={
    props: ["object"],
    template: '<div><table id="list>\n' +
        '             <tr>\n' +
        '                 <th style="width:50px">글번호<th>\n' +
        '                 <th>글제목</th>\n' +
        '                 <th style="width:50px">조회수</th>\n' +
        '                 <th style="width:70px"></th>\n' +
        '             </tr>\n' +
        '             <tr v-for="item in object" v-bind:key="item.no">' +
        '                 <td>{{item.no}}</td>' +
        '                 <td v-on:click="boardRead(item)">{{item.title}}</td>' +
        '                 <td>{{item.view}}</td>' +
        '                 <td><button v-on:click="boardDelete(item.no)">삭제</button></td></tr>' +
        '             </table>' +
        '             <button v-on:click="boardWrite" style="float:right;">글쓰기</button></div>',
    methods:{
        boardRead : function(info){
            this.$emit('board-read',info);
        },
        boardWrite : function(){
            this.$emit('board-write');
        },
        boardDelete : function(no){
            this.$emit('board-delete',no);
        }
    }
};

var MyBoardRead={
    props: ["object"],
    template:'<div><table id="list">\n' +
        '        <tr>\n' +
        '            <td style="width:50px">글제목</td>\n' +
        '            <td>{{object.title}}</td>\n' +
        '        </tr>\n' +
        '        <tr style="height:300px">\n' +
        '            <td colspan="2">{{object.content}}</td>\n' +
        '        </tr>\n' +
        '    </table>' +
        '<button v-on:click="boardList" style="float:right;">목록</button></div>',
    methods:{
        boardList: function(){
            this.$emit('board-list');
        }
    }
};

var MyBoardWrite = {
    template:'     <div>\n' +
        '    <table id="list">\n' +
        '        <tr>\n' +
        '            <td>글제목</td>\n' +
        '            <td><input type="text" v-model="title" style="width:90%"></td>\n' +
        '        </tr>\n'+
        '        <tr>\n' +
        '            <td colspan="2"><textarea v-model="content" style="width:100%"></textarea></td>\n' +
        '        </tr>\n' +
        '    </table>\n' +
        '    <button v-on:click="boardList" style="float:right;">목록</button>' +
        '    <button v-on:click="boardSave" style="float:right;">저장</button></div>',
        methods:{
            boardList: function(){
                this.$emit('board-list');
            },
            boardSave: function(){
                this.$emit('board-save', this.title, this.content);
            }
        },
        data: function(){
            return{
                title:"",
                content:""
            }
        }
};