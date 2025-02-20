---
layout: home.html
---

{% for recipe in collections.recipes %}
    [{{recipe.data.title}}]({{recipe.url}})
{% endfor %}