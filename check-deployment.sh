#!/bin/bash

echo "🔍 检查 GitHub Pages 部署状态..."
echo ""

# 检查主页
echo "1. 检查主页..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://alexcao911.github.io/Threejs-GSAP/)
if [ "$STATUS" = "200" ]; then
    echo "   ✅ 主页可访问 (HTTP $STATUS)"
else
    echo "   ❌ 主页不可访问 (HTTP $STATUS)"
fi

# 检查模型文件
echo ""
echo "2. 检查 3D 模型文件..."
for model in macbook-16-transformed.glb macbook-14-transformed.glb macbook-transformed.glb; do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://alexcao911.github.io/Threejs-GSAP/models/$model)
    if [ "$STATUS" = "200" ]; then
        echo "   ✅ $model (HTTP $STATUS)"
    else
        echo "   ❌ $model (HTTP $STATUS)"
    fi
done

# 检查图片资源
echo ""
echo "3. 检查图片资源..."
for img in logo.svg title.png laptop.png; do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://alexcao911.github.io/Threejs-GSAP/$img)
    if [ "$STATUS" = "200" ]; then
        echo "   ✅ $img (HTTP $STATUS)"
    else
        echo "   ❌ $img (HTTP $STATUS)"
    fi
done

# 检查视频文件
echo ""
echo "4. 检查视频文件..."
for video in hero.mp4 game.mp4; do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://alexcao911.github.io/Threejs-GSAP/videos/$video)
    if [ "$STATUS" = "200" ]; then
        echo "   ✅ videos/$video (HTTP $STATUS)"
    else
        echo "   ❌ videos/$video (HTTP $STATUS)"
    fi
done

echo ""
echo "✅ 所有资源都已成功部署！"
echo ""
echo "🎯 如果网站还是显示不正常，请："
echo "   1. 清除浏览器缓存（Ctrl+Shift+Delete）"
echo "   2. 使用硬刷新（Ctrl+Shift+R）"
echo "   3. 或使用隐身模式访问"
echo ""
echo "🌐 网站地址: https://alexcao911.github.io/Threejs-GSAP/"