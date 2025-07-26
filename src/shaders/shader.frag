#version 450

layout(location = 0) in vec3 fragColor;

layout(binding = 0) uniform UniformBufferObject {
    mat4 model;
    mat4 view;
    mat4 proj;
    float time;
} ubo;

layout(location = 0) out vec4 outColor;

void main() {
    vec3 base = mix(vec3(0.0, 0.8, 1.0), vec3(0.0, 1.0, 0.4), fragColor.g);
    float brightness = 0.6 + 0.4 * sin(ubo.time + fragColor.r * 4.0);
    outColor = vec4(base * brightness, 1.0);
}
