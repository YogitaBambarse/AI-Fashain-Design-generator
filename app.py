import streamlit as st
from streamlit.components.v1 import html

st.set_page_config(layout="wide")

with open("index.html", "r", encoding="utf-8") as f:
    html_code = f.read()

html(html_code, height=900, scrolling=True)
