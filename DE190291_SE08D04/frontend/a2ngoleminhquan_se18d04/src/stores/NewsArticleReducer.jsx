export const newsArticleInitialState = {
    newsArticles: [],
    newsArticle: {
        newsTitle: '',
        headline: '',
        createdDate: null,
        newsContent: '',
        newsSource: '',
        newsCategory: null,
        newsTag: {},
        status: false,
        createdBy: null,
        updatedBy: null,
        modifiedDate: null
    },

    errors: ""
};

export function newsArticleReducer(state, action) {
    switch (action.type) {
        case 'FIELD_CHANGE':
            return {
                ...state,
                newsArticle: {
                    ...state.newsArticle,
                    [action.field]: action.value
                },

                errors: {
                    ...state.errors,
                    [action.field]: null
                }
            };

        case 'SET_ERRORS': 
            return {
                ...state, 
                errors: action.payload
            };

        case 'GET_NEWS_ARTICLES': 
            return {
                ...state,
                newsArticles: action.payload,
                errors: {}
            }

        case 'ADD_NEWS_ARTICLE': 
            return {
                ...state,
                newsArticles: [...state.newsArticles, action.payload],
                newsArticle: {...newsArticleInitialState.newsArticle},
                errors: {}
            };
        
        case 'UPDATE_NEWS_ARTICLE': 
            return {
                ...state,
                newsArticles: state.newsArticles.map(n => n.newsArticleId === action.payload.newsArticleId ? action.payload : n),
                newsArticle: {...newsArticleInitialState.newsArticle},
                errors: {}
            }
            
        case 'DELETE_NEWS_ARTICLE': 
            return {
                ...state,
                newsArticles: state.newsArticles.filter(n => n.newsArticleId !== action.payload.newsArticleId)
            }

        default: return state;
    }
} 