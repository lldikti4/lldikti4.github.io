// Example JavaScript code to load university data into the clusters
// This should be adjusted according to where and how your data is stored.

$(document).ready(function() {
    // Assuming you have endpoints or data to fetch for each zone
    $.get('/api/zona-merah', function(data) {
        $('.card-text[data-zone="merah"]').text(data.universities.join(", "));
    });

    $.get('/api/zona-kuning', function(data) {
        $('.card-text[data-zone="kuning"]').text(data.universities.join(", "));
    });

    $.get('/api/zona-hijau', function(data) {
        $('.card-text[data-zone="hijau"]').text(data.universities.join(", "));
    });
});
