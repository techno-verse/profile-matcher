import natural = require('natural');

// This class facilitate "Term Frequency–Inverse Document Frequency" module functionality
export class NlpTfIdf {
    TfIdf = natural.TfIdf;
    tfidf: natural.TfIdf
    constructor() {
        this.tfidf = new this.TfIdf();
    }

    add_document_string(data: string) {
        this.tfidf.addDocument(data);
    }

    add_document_list(data: string[]) {
        this.tfidf.addDocument(data);
    }

    get_score(data: string) {
        let results: number = 0
        this.tfidf.tfidfs(data, function (i: number, measure: number) {
            results = measure;
        });
        return results;
    }
}
