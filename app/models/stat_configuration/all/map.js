function(doc, meta) {
  if (doc.type == "stat_configuration" && doc.name) {
    emit(doc.name);
  }
}
