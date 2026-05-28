---
title: Configure AI providers
nextjs:
  metadata:
    title: Configure AI providers
    description: .....
---

{% callout type="warning" %}
Available on v6 (canary)
{% /callout %}

Inkdrop is capable of integrating with AI providers, which unlocks AI-powered features such as inline assistant.
For the privacy and security reasons, Inkdrop doesn't provide built-in AI provider and you have to bring your own API key.

## Bring your own keys

If you already have an API key for a provider like Anthropic, or a self-hosted OpenAI-compatible provider, you can add it to Inkdrop.

{% callout type="note" %}
API keys are not stored as plain text in your settings file, but rather in your OS's secure credential storage.
{% /callout %}

## Supported providers

Inkdrop supports these providers with your own API keys:

- **Anthropic**
- **OpenAI-compatible providers** (e.g., Ollama, OepnRouter, etc.)

## How to configure AI providers

To configure the integration, go to **Preferences > Integrations** on macOS or **File > Settings > Integrations** on Windows and Linux.

![Preferences window](/images/configure-ai-providers_preferences.png)

- **Provider**: Choose which provider to use for AI features. When set to **Auto**,
  the first configured provider is used.

### Anthropic

1. Sign up for Anthropic and [create an API key](https://console.anthropic.com/settings/keys)
2. Make sure that your Anthropic account has credits
3. Enter your Anthropic API key

Even if you pay for Claude Pro, you will still have to [pay for additional credits](https://platform.claude.com/settings/billing) to use it via the API.

Inkdrop will also use the `ANTHROPIC_API_KEY` environment variable if it's defined.

#### Custom models

You can add custom models to the Anthropic provider by adding the following to your `config.json` file:

```json
{
  "*": {
    "ai": {
      "providers": {
        "anthropic": {
          "models": [
            {
              "id": "claude-sonnet-4-7",
              "displayName": "Claude Sonnet 4.7",
              "capabilities": {
                "supportsTools": true,
                "supportsImages": true,
                "supportsThinking": true,
                "supportsStreamingTools": true,
                "maxTokens": 200_000,
                "maxOutputTokens": 64_000
              },
              "cacheConfiguration": {
                "minTotalTokens": 2048,
                "minCachedTokens": 1024,
                "shouldSpeculate": true
              }
            }
          ],
          "defaultModelId": "claude-sonnet-4-7",
          "defaultFastModelId": "claude-haiku-4-5"
        }
      }
    }
  }
}
```

### OpenAI API Compatible

Inkdrop supports using [OpenAI compatible APIs](https://developers.openai.com/api/reference/resources/chat) by specifying a custom `baseURL` and `models`.
This is useful for connecting to other hosted services (like Together AI, Anyscale, etc.) or local models.

You can add a custom, OpenAI-compatible model either via the UI or by editing your `config.json` file.

To do it via the UI, click **Add OpenAI-Compatible Provider**. Then, fill up the input fields available in the modal:

![Add OpenAI-Compatible Provider](/images/configure-ai-providers_openai-compatible.png)

To do it via your config file, add the following snippet under `"providers"`:

```json
{
  "*": {
    "ai": {
      "providers": {
        "openaiCompatible": [
          {
            "id": "ollama",
            "displayName": "Ollama",
            "baseURL": "http://localhost:11434/v1",
            "models": [
              {
                "id": "qwen3.5:9b"
              }
            ],
            "defaultModelId": "qwen3.5:9b",
            "defaultFastModelId": "qwen3.5:9b"
          }
        ]
      }
    }
  }
}
```

Note that LLM API keys aren't stored in your config file.
So, ensure you have it set in your environment variables (`<PROVIDER_NAME>_API_KEY=<your api key>`) or specified in the UI so your settings can pick it up.
