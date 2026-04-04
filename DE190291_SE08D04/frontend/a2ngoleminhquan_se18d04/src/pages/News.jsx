import { newsArticleInitialState, newsArticleReducer } from "../stores/NewsArticleReducer";
import { useReducer } from "react";
import { useNewsArticles } from "../hooks/useNewsArticles";

function News() {
    const [state, dispatch] = useReducer(newsArticleReducer, newsArticleInitialState);

    const { deleteNewsArticle } = useNewsArticles(state, dispatch);

    return (
    <>
        <h3 className = "text-center align-items-center py-3">News Management</h3>

        <table className = "table table-striped table-hover align-middle px-5" >
            <thead className="table-primary text-white">
                <tr>
                    <th className = "px-3 py-2">ID</th>
                    <th className = "px-3 py-2">Title</th>
                    <th className = "px-3 py-2">Created Date</th>
                    <th className = "px-3 py-2">Category</th>
                    <th className = "px-3 py-2">Status</th>
                    <th className = "px-3 py-2">Created by</th>
                    <th className = "px-3 py-2">Updated by</th>
                    <th className = "px-3 py-2">ModifiedDate</th>

                </tr>
            </thead>

            <tbody>
                {state.newsArticles.map(pieceOfNews => (
                    <tr key = {pieceOfNews.newsArticleId}>
                        <td className = "px-3">{pieceOfNews.newsArticleId}</td>
                        <td className = "px-3">{pieceOfNews.newsTitle}</td>
                        <td className = "px-3">{pieceOfNews.createdDate}</td>
                        <td className = "px-3">{pieceOfNews.newsCategory.categoryName}</td>
                        <td className = "px-3">{pieceOfNews.status ? "ACTIVE" : "INACTIVE"}</td>
                        <td className = "px-3">{pieceOfNews.createdBy.accountName}</td>
                        <td className = "px-3">{pieceOfNews.updatedBy.accountName}</td>
                        <td className = "px-3">{pieceOfNews.modifiedDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default News;