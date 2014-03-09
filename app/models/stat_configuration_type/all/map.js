function(doc, meta) {
  if (doc.type == "stat_configuration_type" && doc.name) {
    emit(doc.name);
  }
}
