# Cute Heatmap

A customizable GitHub contribution heatmap generator with different themes and shapes! Create cute visualizations of your coding activity with pastel colors, cute shapes, and gradient borders.

## Features

- **10 Colour Themes**: Pink, Lavender, Mint, Blue, Cotton Candy, Sunset, Ocean, Forest, Berry, Peach
- **5 Cute Shapes**: Rectangles, Hearts, Sparkles, Flowers, Clouds
- **Gradient Borders**: Optional colorful borders using all theme colors
- **Simple Design**: Minimalist layout without text labels for a modern look
- **Customizable**: Choose colors, shapes, and border options

## Available Themes

| Theme            | Colors                  | Preview              |
| ---------------- | ----------------------- | -------------------- |
| **Pink**         | Soft pink gradient      | `?color=pink`        |
| **Lavender**     | Purple gradient         | `?color=lavender`    |
| **Mint**         | Fresh green gradient    | `?color=mint`        |
| **Blue**         | Cool blue gradient      | `?color=blue`        |
| **Cotton Candy** | Pink to blue gradient   | `?color=cottoncandy` |
| **Sunset**       | Pink to orange gradient | `?color=sunset`      |
| **Ocean**        | Blue gradient           | `?color=ocean`       |
| **Forest**       | Green gradient          | `?color=forest`      |
| **Berry**        | Pink to purple gradient | `?color=berry`       |
| **Peach**        | Peach gradient          | `?color=peach`       |

## Available Shapes

| Shape          | Symbol          | Preview           |
| -------------- | --------------- | ----------------- |
| **Rectangles** | Rounded squares | `?shape=rect`     |
| **Hearts**     | Heart symbols   | `?shape=hearts`   |
| **Sparkles**   | Sparkle symbols | `?shape=sparkles` |
| **Flowers**    | Flower symbols  | `?shape=flowers`  |
| **Clouds**     | Cloud symbols   | `?shape=clouds`   |

## Usage

### Basic Usage

```
https://cute-heatmap.vercel.app/api/heatmap?user=username
```

### With Custom Theme and Shape

```
https://cute-heatmap.vercel.app/api/heatmap?user=username&color=cottoncandy&shape=clouds
```

### Without Border

```
https://cute-heatmap.vercel.app/api/heatmap?user=username&color=pink&shape=hearts&border=false
```

### Parameters

- `user` (required): GitHub username
- `color` (optional): Theme color (default: `pink`)
- `shape` (optional): Shape style (default: `rect`)
- `border` (optional): Show gradient border (default: `true`)

## Examples

### Cotton Candy Clouds

```
/api/heatmap?user=octocat&color=cottoncandy&shape=clouds
```

![Cotton Candy Clouds](https://cute-heatmap.vercel.app/api/heatmap?user=Emmyme&color=cottoncandy&shape=clouds)

### Sunset Sparkles

```
/api/heatmap?user=username&color=sunset&shape=sparkles
```

![Sunset Sparkles](https://cute-heatmap.vercel.app/api/heatmap?user=Emmyme&color=sunset&shape=sparkles)

### Berry Hearts

```
/api/heatmap?user=username&color=berry&shape=hearts
```

![Berry Hearts](https://cute-heatmap.vercel.app/api/heatmap?user=Emmyme&color=berry&shape=hearts)

### Mint Flowers

```
/api/heatmap?user=username&color=mint&shape=flowers
```

![Mint Flowers](https://cute-heatmap.vercel.app/api/heatmap?user=Emmyme&color=mint&shape=flowers)

### Pink Rectangles (Default)

```
/api/heatmap?user=username&color=pink&shape=rect
```

![Pink Rectangles](https://cute-heatmap.vercel.app/api/heatmap?user=Emmyme&color=pink&shape=rect)

### Ocean Clouds (No Border)

```
/api/heatmap?user=username&color=ocean&shape=clouds&border=false
```

![Ocean Clouds No Border](https://cute-heatmap.vercel.app/api/heatmap?user=Emmyme&color=ocean&shape=clouds&border=false)

## Deployment

### Option 1: Use the Public API (Recommended for most users)

You can use the live API directly without any setup:

```
https://cute-heatmap.vercel.app/api/heatmap?user=yourusername&color=pink&shape=hearts
```

**Limitations:**

- Only shows public contributions
- Rate limited to 5,000 requests/hour
- Cannot access private repository data

### Option 2: Deploy Your Own Instance (For Private Contributions)

If you want to show contributions from private repositories, you'll need to deploy your own instance:

1. **Fork or clone this repository**
2. **Create a GitHub Personal Access Token:**

   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate a new token with `read:user` and `repo` permissions
   - Copy the token (starts with `ghp_`)

3. **Deploy to Vercel:**

   - Connect your repository to Vercel
   - Add environment variable: `GITHUB_TOKEN` = your token
   - Deploy

4. **Use your own API:**
   ```
   https://your-vercel-domain.vercel.app/api/heatmap?user=yourusername&color=berry&shape=clouds
   ```

**Benefits of your own deployment:**

- Access to private repository contributions
- No rate limiting from shared tokens
- Full control over your data
- Can customize the code if needed

## Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env` file with your GitHub token:
   ```
   GITHUB_TOKEN=ghp_yourTokenHere
   ```
4. Run locally: `npm run dev`
5. Visit: `http://localhost:3000/api/heatmap?user=username`

## Environment Variables

- `GITHUB_TOKEN`: Your GitHub personal access token

## Customization

The heatmap supports:

- **10 color themes** with beautiful gradients
- **5 shape options** for different styles
- **Optional gradient borders** using theme colors
- **Customizable padding** and spacing
- **Clean, minimal design** without text labels

## Security Notes

- Never commit your GitHub token to the repository
- Use environment variables for sensitive data
- For private contributions, users should deploy their own instance
- The API only accesses public contribution data by default

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

