import Criteria from './Criteria'

class Paging {
  constructor(page) {
    if (page == null) {
      this.cri = new Criteria()

      this.endPage = 1
      this.startPage = 1
      this.next = false
      this.pre = false
      this.total = 1
    } else {
      this.cri = page.cri

      this.endPage = page.endPage
      this.startPage = page.startPage
      this.next = page.next
      this.pre = page.pre
      this.total = page.total
    }
  }

  makePrevious() {
    console.log('makePrevious ..' + this.startPage + ':' + this.cri.amount)

    // let urlParams = new URLSearchParams('/rboard/list2')

    // urlParams.append('pageNum', this.startPage - 10)
    // urlParams.append('amount', this.cri.amount)
    // console.log(decodeURIComponent(urlParams.toString()))
    // return decodeURIComponent(urlParams.toString())

    return '/rboard/list2' + '?pageNum=' + (this.startPage - 10) + '&' + 'amount=' + this.cri.amount
  }

  makeNext() {
    console.log('makeNext ..')
    return '/rboard/list2' + '?pageNum=' + (this.endPage + 1) + '&' + 'amount=' + this.cri.amount
  }

  makeLink(i) {
    console.log('makeLink..')
    return '/rboard/list2' + '?pageNum=' + i + '&' + 'amount=' + this.cri.amount
  }

  range(start = 1, stop = 1, step = 1) {
    return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)
  }
}

export default Paging