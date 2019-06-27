export interface IBaseArticle {
    title:string
    summary:string
    content:string
    tags:string[]
    author:string
    createTime:number
    updateTime:number
}

export interface IArticle extends IBaseArticle{
    id:string
}

interface IListParams {
    page?:number
    size?:number
}

export function listArticles(params:IListParams): Promise<IArticle[]> {
    // return Promise.resolve([])
    return new Promise<IArticle[]>(res => {
        setTimeout(() => {
            res([{id:'1',title:'testTitle',summary:'testSummary',content:'testContent',tags:['tag1','tag2'],author:'testAuthor',createTime:2837837,updateTime:75346334}])
        }, 2000)
    })
}

export function getArticle(id:string) {
    return new Promise<IArticle>(res => {
        setTimeout(() => {
            res()
        },2000)
    })
}

export function createArticle(article: IBaseArticle) {
    return new Promise<string>( res =>{
        setTimeout(() => {
            res()
        },2000)
    })
}

export function updateArticle(article:IArticle) {
    return new Promise<string>(res => {
        setTimeout(() => {
            res()
        },2000)
    })
}

export function deleteArticle(id:string) {
    return new Promise<string>(res => {
        setTimeout(() => {
            res()
        },2000)
    })
}