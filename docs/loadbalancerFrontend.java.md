# `upcloud_loadbalancer_frontend`

Refer to the Terraform Registory for docs: [`upcloud_loadbalancer_frontend`](https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend).

# `loadbalancerFrontend` Submodule <a name="`loadbalancerFrontend` Submodule" id="@cdktf/provider-upcloud.loadbalancerFrontend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerFrontend <a name="LoadbalancerFrontend" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend upcloud_loadbalancer_frontend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_frontend.LoadbalancerFrontend;

LoadbalancerFrontend.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .defaultBackendName(java.lang.String)
    .loadbalancer(java.lang.String)
    .mode(java.lang.String)
    .name(java.lang.String)
    .port(java.lang.Number)
//  .id(java.lang.String)
//  .networks(IResolvable)
//  .networks(java.util.List<LoadbalancerFrontendNetworks>)
//  .properties(LoadbalancerFrontendProperties)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.defaultBackendName">defaultBackendName</a></code> | <code>java.lang.String</code> | The name of the default backend where traffic will be routed. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.loadbalancer">loadbalancer</a></code> | <code>java.lang.String</code> | ID of the load balancer to which the frontend is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | When load balancer operating in `tcp` mode it acts as a layer 4 proxy. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the frontend must be unique within the load balancer service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Port to listen incoming requests. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#id LoadbalancerFrontend#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.networks">networks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>></code> | networks block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | properties block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultBackendName`<sup>Required</sup> <a name="defaultBackendName" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.defaultBackendName"></a>

- *Type:* java.lang.String

The name of the default backend where traffic will be routed.

Note, default backend can be overwritten in frontend rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#default_backend_name LoadbalancerFrontend#default_backend_name}

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.loadbalancer"></a>

- *Type:* java.lang.String

ID of the load balancer to which the frontend is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#loadbalancer LoadbalancerFrontend#loadbalancer}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

When load balancer operating in `tcp` mode it acts as a layer 4 proxy.

In `http` mode it acts as a layer 7 proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#mode LoadbalancerFrontend#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the frontend must be unique within the load balancer service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#name LoadbalancerFrontend#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Port to listen incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#port LoadbalancerFrontend#port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#id LoadbalancerFrontend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.networks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>>

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#networks LoadbalancerFrontend#networks}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#properties LoadbalancerFrontend#properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetNetworks">resetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putNetworks` <a name="putNetworks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putNetworks"></a>

```java
public void putNetworks(IResolvable OR java.util.List<LoadbalancerFrontendNetworks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putNetworks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>>

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties"></a>

```java
public void putProperties(LoadbalancerFrontendProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetId"></a>

```java
public void resetId()
```

##### `resetNetworks` <a name="resetNetworks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetNetworks"></a>

```java
public void resetNetworks()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetProperties"></a>

```java
public void resetProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_frontend.LoadbalancerFrontend;

LoadbalancerFrontend.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_frontend.LoadbalancerFrontend;

LoadbalancerFrontend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_frontend.LoadbalancerFrontend;

LoadbalancerFrontend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList">LoadbalancerFrontendNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference">LoadbalancerFrontendPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.rules">rules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tlsConfigs">tlsConfigs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendNameInput">defaultBackendNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancerInput">loadbalancerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networksInput">networksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendName">defaultBackendName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancer">loadbalancer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networks"></a>

```java
public LoadbalancerFrontendNetworksList getNetworks();
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList">LoadbalancerFrontendNetworksList</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.properties"></a>

```java
public LoadbalancerFrontendPropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference">LoadbalancerFrontendPropertiesOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.rules"></a>

```java
public java.util.List<java.lang.String> getRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tlsConfigs`<sup>Required</sup> <a name="tlsConfigs" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tlsConfigs"></a>

```java
public java.util.List<java.lang.String> getTlsConfigs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultBackendNameInput`<sup>Optional</sup> <a name="defaultBackendNameInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendNameInput"></a>

```java
public java.lang.String getDefaultBackendNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadbalancerInput`<sup>Optional</sup> <a name="loadbalancerInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancerInput"></a>

```java
public java.lang.String getLoadbalancerInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networksInput"></a>

```java
public java.lang.Object getNetworksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.propertiesInput"></a>

```java
public LoadbalancerFrontendProperties getPropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

---

##### `defaultBackendName`<sup>Required</sup> <a name="defaultBackendName" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendName"></a>

```java
public java.lang.String getDefaultBackendName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancer"></a>

```java
public java.lang.String getLoadbalancer();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerFrontendConfig <a name="LoadbalancerFrontendConfig" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_frontend.LoadbalancerFrontendConfig;

LoadbalancerFrontendConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .defaultBackendName(java.lang.String)
    .loadbalancer(java.lang.String)
    .mode(java.lang.String)
    .name(java.lang.String)
    .port(java.lang.Number)
//  .id(java.lang.String)
//  .networks(IResolvable)
//  .networks(java.util.List<LoadbalancerFrontendNetworks>)
//  .properties(LoadbalancerFrontendProperties)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.defaultBackendName">defaultBackendName</a></code> | <code>java.lang.String</code> | The name of the default backend where traffic will be routed. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.loadbalancer">loadbalancer</a></code> | <code>java.lang.String</code> | ID of the load balancer to which the frontend is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | When load balancer operating in `tcp` mode it acts as a layer 4 proxy. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the frontend must be unique within the load balancer service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Port to listen incoming requests. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#id LoadbalancerFrontend#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.networks">networks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>></code> | networks block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultBackendName`<sup>Required</sup> <a name="defaultBackendName" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.defaultBackendName"></a>

```java
public java.lang.String getDefaultBackendName();
```

- *Type:* java.lang.String

The name of the default backend where traffic will be routed.

Note, default backend can be overwritten in frontend rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#default_backend_name LoadbalancerFrontend#default_backend_name}

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.loadbalancer"></a>

```java
public java.lang.String getLoadbalancer();
```

- *Type:* java.lang.String

ID of the load balancer to which the frontend is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#loadbalancer LoadbalancerFrontend#loadbalancer}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

When load balancer operating in `tcp` mode it acts as a layer 4 proxy.

In `http` mode it acts as a layer 7 proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#mode LoadbalancerFrontend#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the frontend must be unique within the load balancer service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#name LoadbalancerFrontend#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port to listen incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#port LoadbalancerFrontend#port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#id LoadbalancerFrontend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.networks"></a>

```java
public java.lang.Object getNetworks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>>

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#networks LoadbalancerFrontend#networks}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.properties"></a>

```java
public LoadbalancerFrontendProperties getProperties();
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#properties LoadbalancerFrontend#properties}

---

### LoadbalancerFrontendNetworks <a name="LoadbalancerFrontendNetworks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_frontend.LoadbalancerFrontendNetworks;

LoadbalancerFrontendNetworks.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks.property.name">name</a></code> | <code>java.lang.String</code> | Name of the load balancer network. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the load balancer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#name LoadbalancerFrontend#name}

---

### LoadbalancerFrontendProperties <a name="LoadbalancerFrontendProperties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_frontend.LoadbalancerFrontendProperties;

LoadbalancerFrontendProperties.builder()
//  .inboundProxyProtocol(java.lang.Boolean)
//  .inboundProxyProtocol(IResolvable)
//  .timeoutClient(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.inboundProxyProtocol">inboundProxyProtocol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable or disable inbound proxy protocol support. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.timeoutClient">timeoutClient</a></code> | <code>java.lang.Number</code> | Client request timeout in seconds. |

---

##### `inboundProxyProtocol`<sup>Optional</sup> <a name="inboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.inboundProxyProtocol"></a>

```java
public java.lang.Object getInboundProxyProtocol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable or disable inbound proxy protocol support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#inbound_proxy_protocol LoadbalancerFrontend#inbound_proxy_protocol}

---

##### `timeoutClient`<sup>Optional</sup> <a name="timeoutClient" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.timeoutClient"></a>

```java
public java.lang.Number getTimeoutClient();
```

- *Type:* java.lang.Number

Client request timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/loadbalancer_frontend#timeout_client LoadbalancerFrontend#timeout_client}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerFrontendNetworksList <a name="LoadbalancerFrontendNetworksList" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_frontend.LoadbalancerFrontendNetworksList;

new LoadbalancerFrontendNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.get"></a>

```java
public LoadbalancerFrontendNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>>

---


### LoadbalancerFrontendNetworksOutputReference <a name="LoadbalancerFrontendNetworksOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_frontend.LoadbalancerFrontendNetworksOutputReference;

new LoadbalancerFrontendNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>

---


### LoadbalancerFrontendPropertiesOutputReference <a name="LoadbalancerFrontendPropertiesOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.loadbalancer_frontend.LoadbalancerFrontendPropertiesOutputReference;

new LoadbalancerFrontendPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetInboundProxyProtocol">resetInboundProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetTimeoutClient">resetTimeoutClient</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInboundProxyProtocol` <a name="resetInboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetInboundProxyProtocol"></a>

```java
public void resetInboundProxyProtocol()
```

##### `resetTimeoutClient` <a name="resetTimeoutClient" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetTimeoutClient"></a>

```java
public void resetTimeoutClient()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocolInput">inboundProxyProtocolInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClientInput">timeoutClientInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocol">inboundProxyProtocol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClient">timeoutClient</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inboundProxyProtocolInput`<sup>Optional</sup> <a name="inboundProxyProtocolInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocolInput"></a>

```java
public java.lang.Object getInboundProxyProtocolInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutClientInput`<sup>Optional</sup> <a name="timeoutClientInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClientInput"></a>

```java
public java.lang.Number getTimeoutClientInput();
```

- *Type:* java.lang.Number

---

##### `inboundProxyProtocol`<sup>Required</sup> <a name="inboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocol"></a>

```java
public java.lang.Object getInboundProxyProtocol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutClient`<sup>Required</sup> <a name="timeoutClient" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClient"></a>

```java
public java.lang.Number getTimeoutClient();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.internalValue"></a>

```java
public LoadbalancerFrontendProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

---



