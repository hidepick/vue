import { defineStore } from "pinia";
import boardDataService from "@/service/BoardDataService";
import Paging from "@/models/Paging";

const useBoardStore = defineStore('boardState',{
  state:()=>({
    boards:[], // 게시글 배열
    paging: new Paging()
  }),
  getters:{},
  actions: {
    async getBoards() {
      await boardDataService
        .getPagingList()
        .then((response) => {
          this.boards = response.data.boards
          this.paging = new Paging(response.data.page)

          console.log(response.data)
          console.log(this.boards)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    async getPagingBoards(param) {
      console.log('onClickPaging 스트링' + param)
      const splits = String(param).split('?')

      await boardDataService
        .getPagingList(splits[0], '?' + splits[1])
        .then((response) => {
          this.boards = response.data.boards
          this.paging = new Paging(response.data.page)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    async deleteBoard(bid) {
      console.log('deleteBoard() 번호' + bid)

      await boardDataService
        .remove(Number(bid))
        .then((response) => {
          console.log(response.data + '삭제됨')
        })
        .catch((e) => {
          console.log(e)
        })
    },
    async writeBoard(board) {
      console.log('Wirte 보드' + board.btitle)
      console.log('Wirte 보드' + board.bcontent)
      console.log('Wirte 보드' + board.bname)

      await boardDataService
        .write(board)
        .then((response) => {
          console.log('Write 성공' + response.data)
        })
        .catch((e) => {
          console.log('Write 실패' + e)
        })
    },
    async updateBoard(board) {
      console.log('업데이트 보드' + board)

      await boardDataService
        .update(board.bid, board)
        .then((response) => {
          console.log('update 성공' + response.data)
        })
        .catch((e) => {
          console.log('Write 실패' + e)
        })
    },
    async getBoard(bid) {
      await boardDataService
        .get(Number(bid))
        .then((response) => {
          console.log(response.data)
          this.boards = response.data
        })
        .catch((e) => {
          console.log('Board 실패' + e)
        })
    }
  }
})

export default useBoardStore
