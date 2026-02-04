import axios from "axios";
import { useEffect, useState } from "react";

function News() {
    const [news, setNews] = useState([]);

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
                {news.map(pieceOfNews => (
                    <tr>
                        <td className = "px-3">{pieceOfNews.newsArticleID}</td>
                        <td className = "px-3">{pieceOfNews.newsTitle}</td>
                        <td className = "px-3">{pieceOfNews.createdDate}</td>
                        <td className = "px-3">{pieceOfNews.categoryID}</td>
                        <td className = "px-3">{pieceOfNews.newsStatus}</td>
                        <td className = "px-3">{pieceOfNews.createdByID}</td>
                        <td className = "px-3">{pieceOfNews.updatedByID}</td>
                        <td className = "px-3">{pieceOfNews.modifiedDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default News;